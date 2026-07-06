import express from "express";
import path from "path";
import fs from "fs";
import https from "https";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const VIDEO_PATH = path.resolve("./hero-video.mp4");

// Utility to recursively download video following redirects
function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          downloadFile(redirectUrl, dest).then(resolve).catch(reject);
        } else {
          reject(new Error("Redirect location header missing"));
        }
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(dest);
      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log("Video downloaded successfully to:", dest);
        resolve();
      });

      file.on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
}

async function startServer() {
  const app = express();

  // Try downloading the background video on server boot
  const driveVideoUrl = "https://docs.google.com/uc?export=download&id=1Nc45Hh7qXN_XbpXDIHcpDxmFTQR3pAX6";
  
  if (!fs.existsSync(VIDEO_PATH)) {
    console.log("Starting background video download from Google Drive...");
    downloadFile(driveVideoUrl, VIDEO_PATH)
      .catch((err) => {
        console.error("Failed to download video from Google Drive, will use redirection fallback:", err.message);
      });
  } else {
    console.log("Local background video already exists.");
  }

  // API route to serve/proxy the background video with full range support
  app.get("/api/video", (req, res) => {
    if (fs.existsSync(VIDEO_PATH)) {
      res.sendFile(VIDEO_PATH);
    } else {
      // Temporary redirection fallback while downloading
      res.redirect("https://lh3.googleusercontent.com/d/1Nc45Hh7qXN_XbpXDIHcpDxmFTQR3pAX6=m22");
    }
  });

  // Apply Vite dev server middleware in non-production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
