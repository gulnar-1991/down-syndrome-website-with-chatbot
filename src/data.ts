import { Service, LocationInfo, ProgramStep, Testimonial } from "./types";

export const CLINIC_NAME = "Bright Horizons Pediatric Care";
export const TAGLINE = "Where every child's journey is celebrated.";
export const FOCUS_TEXT = "Specialized support for Down syndrome, autism, and complex developmental needs.";
export const PORTAL_URL = "https://mychart.kidshealthalliance.ca";
export const EMAIL_CONTACT = "info@brighthorizonscare.ca";
export const PHONE_CONTACT = "613-737-7600";
export const PHONE_FORMATTED = "613-737-7600";

export const SERVICES: Service[] = [
  {
    id: "care-plans",
    name: "Individualized Care Plans",
    shortDescription: "A unified, tailored blueprint coordinated by a lead therapist.",
    fullDescription: "Every child is unique. We co-create a unified milestone roadmap built specifically around your child's individual strengths, interests, and sensory needs. Your dedicated lead therapist coordinates physical, speech, and occupational services to ensure your family experiences one connected team, one vision, and one seamless care plan.",
    bulletPoints: [
      "Dedicated clinical lead coordination",
      "Strengths-based developmental goal setting",
      "Regular collaborative multi-therapist reviews",
      "Comprehensive parent empowerment and coaching"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "down-syndrome",
    name: "Down Syndrome Support",
    shortDescription: "Multidisciplinary milestone pathways from early infancy through youth.",
    fullDescription: "Focused multidisciplinary support pathways from infancy through school age and beyond. Our pediatricians and therapists work collaboratively with your family to support fine and gross motor mastery, target cognitive gains, enhance communication, and foster social confidence for lifelong autonomy.",
    bulletPoints: [
      "Early motor and feeding therapy milestones",
      "Targeted cognitive and reading strategies",
      "Gross motor strengthening and physical therapy",
      "Transition-to-school readiness planning"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "autism-services",
    name: "Autism Services",
    shortDescription: "Neurodiversity-affirming socio-communication and sensory therapy.",
    fullDescription: "Neurodiversity-affirming care that respects and honors how your child perceives, processes, and interacts with the world. We focus on enhancing functional communication, supporting sensory regulation, developing play/social mechanics, and facilitating self-advocacy without seeking to mask your child's beautiful individuality.",
    bulletPoints: [
      "Neurodiversity-affirming communication therapy",
      "Individually tailored sensory regulation profiles",
      "Socio-emotional development through child-led play",
      "Self-advocacy and environment modifications"
    ],
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "speech-language",
    name: "Speech & Language Therapy",
    shortDescription: "Communication support from early speech to AAC systems.",
    fullDescription: "Helping your child find their preferred voice. Our customized linguistic and communication support ranges from speech sounds and articulation training to alternative communication methods, motor-speech protocols, social language skill groups, and feeding therapy for oral-motor precision.",
    bulletPoints: [
      "Speech sound, clarity, and articulation gains",
      "Augmentative & Alternative Communication (AAC) setups",
      "Receptive and expressive language development",
      "Oral motor exercises and feeding therapy"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "occupational-therapy",
    name: "Occupational Therapy",
    shortDescription: "Sensory strategies, fine motor skills, and functional play.",
    fullDescription: "Empowering children to participate fully in their daily environments. We utilize play and therapeutic activities to target fine motor dexterity, coordinate sensory integration, establish robust self-care sub-routines (dressing, feeding), and adapt homework/play environments.",
    bulletPoints: [
      "Fine motor precision and handwriting flow",
      "Sensory processing integration plans",
      "Daily self-care and hygiene routines support",
      "Play exploration and school-desk adaptations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "family-navigation",
    name: "Family Navigation & Brokerage",
    shortDescription: "Decodable support schemas to unlock provincial aid and funding.",
    fullDescription: "Successfully coordinating complex pediatric care can feel overwhelming. Our dedicated family coordinators serve as your navigators, decoding complex OAP (Ontario Autism Program) funding structures, establishing service coordination with school boards, securing provincial aids, and linking with local support groups.",
    bulletPoints: [
      "OAP and Special Services at Home support",
      "School Board accommodation (IEP) consultation",
      "Therapist booking scheduling coordination",
      "Local community and parent network referrals"
    ],
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
  }
];

export const PROGRAM_STEPS: ProgramStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Discovery Call & Matching",
    description: "Begin with a complimentary 15-minute consultation. We discuss your child's background, functional needs, and schedule, then match you with a tailored lead specialist."
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Multidisciplinary Assessment",
    description: "Participate in an in-person, sensory-friendly evaluation. Our team observes play habits, assesses motor-expressive milestones, and reviews medical backgrounds with you."
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Connected Care Blueprint",
    description: "We orchestrate our evaluations into one cohesive care plan. Together, we establish specific, measurable outcome goals centered on your child's happiness and independence."
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Guided Therapy & Parent Coaching",
    description: "sessions begin in our inviting Ottawa facility. We pair physical progress with comprehensive home-strategy guides, making therapy a joyful and repetitive habit."
  }
];

export const GENERAL_ELIGIBILITY = {
  title: "Service Eligibility & Funding Options",
  subtitle: "We believe therapeutic support should be accessible. Here is a guide to how we work with Ontario funding streams and age parameters.",
  content: "Bright Horizons welcomes all infants, children, and youth from birth through age 18 residing in the Ottawa Valley, Eastern Ontario, and Western Quebec regions.",
  fundingOptions: [
    {
      title: "Ontario Autism Program (OAP)",
      description: "As an approved clinician registry team, you can directly use your child's OAP Core Clinical Services funding with us for speech-language path, occupational therapy, and mental health."
    },
    {
      title: "Special Services at Home (SSAH)",
      description: "SSAH funding provided by the Ministry of Children, Community and Social Services can be applied to buy support relief or specialized milestone coaching hours."
    },
    {
      title: "Private & Extended Health Insurance",
      description: "Our therapists are certified and licensed with Ontario/Quebec colleges. Your sessions are eligible for reimbursement under speech therapy or occupational therapy insurance packages."
    },
    {
      title: "Jordan's Principle Support",
      description: "For First Nations children residing on or off-reserve, we support direct invoicing and coordinator applications under Canada's Jordan's Principle initiative."
    }
  ]
};

export const CLINIC_LOCATIONS: LocationInfo[] = [
  {
    id: "ottawa-central",
    name: "Bright Horizons Ottawa Central",
    address: "1355 Bank Street, Suite 208",
    city: "Ottawa",
    province: "ON",
    postalCode: "K1H 8K7",
    phone: "613-737-7600",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 1:00 PM"
  },
  {
    id: "kanata-west",
    name: "Bright Horizons Ottawa West",
    address: "300 Terry Fox Drive, Suite 104",
    city: "Kanata",
    province: "ON",
    postalCode: "K2K 0E3",
    phone: "613-737-7605",
    hours: "Monday - Friday: 8:00 AM - 5:30 PM"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Finding one place where our speech therapist, occupational therapist, and school board navigator actually speak to each other has changed everything for our family. Our daughter feels safe and excited to walk through the doors.",
    author: "Nathalie Mercier",
    role: "Mother of Chloé (Age 5, Down Syndrome)",
    relationship: "Ottawa, ON"
  },
  {
    id: "test-2",
    quote: "The neurodiversity-affirming approach here is real. They never focused on making my son fit into a standard mold; they helped us build communication channels, identify sensory triggers, and advocate for his needs.",
    author: "David Vance",
    role: "Father of Elijah (Age 8, Autistic)",
    relationship: "Kanata, ON"
  },
  {
    id: "test-3",
    quote: "They guide you step-by-step through OAP paperwork and coordinate assessments seamlessly. The relief of feeling supported by professionals who genuinely care about pediatric growth is immeasurable.",
    author: "Amira Al-Saeed",
    role: "Mother of Ryan (Age 3, Developmental Delay)",
    relationship: "Nepean, ON"
  }
];
