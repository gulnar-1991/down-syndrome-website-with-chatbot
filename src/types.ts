export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
  imageUrl: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  hours: string;
}

export interface ProgramStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  relationship: string; // e.g. "Parent of Leo, age 6"
}
