const gh = (name) => `https://github.com/geeky-vaiiib/${name}`;

export const personalContext = {
  name: "Vaibhav J P",
  role: "Full-stack developer",
  institution: "Siddaganga Institute of Technology",
  graduationYear: "2027",
  location: "Tumakuru, Karnataka"
};

export const intro = `I build web products end to end, from the data model to the last bit of polish in the interface. Lately that has meant screening software for neurodevelopmental conditions, a tumour-segmentation platform, and a campus chatbot that would rather say "I don't know" than make something up.`;

export const projects = [
  {
    id: "neurosense",
    title: "NeuroSense",
    year: "2026",
    kind: "Health · Machine learning",
    thesis: "A research-grade screening aid for autism, and honest that it is not a diagnostic tool.",
    description:
      "A multimodal screening aid for autism spectrum disorder, covering adult, child and toddler tracks. It combines the AQ-10 and Q-CHAT-10 questionnaires with gaze, speech and facial signals, scored by a FastAPI pipeline. It is built as a screening tool and says so, not as a diagnosis.",
    features: [
      "Three tracks: adult, child and toddler",
      "AQ-10 and Q-CHAT-10 questionnaire wizards",
      "Gaze session using WebGazer.js / MediaPipe",
      "Speech session recorded in the browser with MediaRecorder",
      "Facial session from a webcam snapshot",
      "Results persisted to MongoDB Atlas"
    ],
    architecture:
      "The React/Vite frontend runs the questionnaire, gaze, speech and facial sessions in the browser and posts them to a single screening endpoint. A FastAPI backend preprocesses the input and passes it to separate gaze, speech and facial scoring engines before saving the result.",
    note: "Results are a screening aid and must not be used for clinical diagnosis without review by a qualified professional.",
    tech: ["React", "Vite", "FastAPI", "MongoDB Atlas", "MediaPipe"],
    github: gh("NeuroSense"),
    live: ""
  },
  {
    id: "cerebra",
    title: "Cerebra",
    year: "2026",
    kind: "Health · Deep learning",
    thesis: "Tumour segmentation for MRI scans, wrapped in a secure workspace for physicians.",
    description:
      "A platform where clinicians upload MRI slices and get real-time tumour segmentation with heatmap overlays and volumetric tracking. A PyTorch U-Net runs behind a FastAPI service, with anonymised patient data and a case board for tumour-board discussion.",
    features: [
      "Drag-and-drop ingestion of MRI slices",
      "Real-time probability calculation with heatmap overlays",
      "Automatic anonymisation of patient data",
      "Case board with bookmarks",
      "Tumour-board events with RSVP and attendance",
      "Platform statistics read live from the database"
    ],
    architecture:
      "A lightweight HTML, CSS and vanilla JavaScript frontend talks to a FastAPI backend that exposes the inference service. The model core is a PyTorch U-Net, with configuration in YAML and CORS and rate limiting on the API.",
    tech: ["PyTorch", "FastAPI", "Python", "JavaScript"],
    github: gh("Cerebra"),
    live: ""
  },
  {
    id: "uni-bot",
    title: "Uni-Bot",
    year: "2026",
    kind: "AI · Retrieval",
    thesis: "A campus chatbot that would rather say \u201CI don\u2019t know\u201D than guess.",
    description:
      "A campus assistant for SIT that answers only from 25+ official documents, with a source cited on every reply. Retrieval runs on FAISS and the model runs locally through Ollama, so there are no API costs and no student data leaves the machine.",
    features: [
      "Answers drawn only from 25+ official SIT documents",
      "Source citations on every response",
      "Admits when the knowledge base has no answer",
      "Student, Exam and Faculty query modes",
      "User authentication and a mobile-responsive React frontend"
    ],
    architecture:
      "A retrieval-augmented generation pipeline: documents are embedded into a FAISS vector store, relevant passages are retrieved per question, and a local Llama 3.2 model served by Ollama writes the answer. A FastAPI backend sits between the React frontend and the pipeline.",
    tech: ["Python", "FastAPI", "FAISS", "Ollama", "React"],
    github: gh("Uni-Bot"),
    live: ""
  },
  {
    id: "alumniverse",
    title: "AlumniVerse",
    year: "2025",
    kind: "Community platform",
    thesis: "A database-driven alumni network for SIT, with no mock data in the interface.",
    description:
      "An alumni network for SIT with a news feed, job board, events and RSVPs. Sign-up is restricted to institute email addresses with OTP verification, and the data layer relies on row-level security and database triggers for live counts.",
    features: [
      "Email/password auth with OTP verification and SIT domain validation",
      "USN, branch and year derived from the institute email",
      "Posts with likes and threaded comments",
      "Job board with filters and bookmarks",
      "Events with RSVP, attendee counts and virtual meeting links",
      "Live platform statistics"
    ],
    architecture:
      "A Next.js 14 App Router frontend with Radix UI primitives and a Node/Express backend, both using Supabase for authentication, PostgreSQL and file storage. Row Level Security policies protect data, and database triggers keep like and comment counts current.",
    tech: ["Next.js", "Express", "Supabase", "PostgreSQL"],
    github: gh("AlumniVerse"),
    live: ""
  },
  {
    id: "lokah",
    title: "Lokah",
    year: "2025",
    kind: "AI · Product design",
    thesis: "Many worlds, one you.",
    description:
      "Short, grounded conversations with alternate versions of yourself, shaped by memories you share. Supabase Edge Functions handle generation, and the interface is deliberately quiet and unclinical.",
    features: [
      "Chats with human-feeling alternate versions of yourself",
      "Memory extraction from what you share",
      "Rich onboarding flow",
      "Tone kept short and grounded, avoiding therapy-speak"
    ],
    architecture:
      "A Vite, React and TypeScript frontend with shadcn/ui and Framer Motion, calling Supabase Edge Functions for generation and memory extraction.",
    tech: ["TypeScript", "React", "Framer Motion", "Supabase"],
    github: gh("Lokah"),
    live: ""
  },
  {
    id: "prodease",
    title: "ProdEase",
    year: "2025",
    kind: "Operations software",
    thesis: "Manufacturing workflows and stock, tracked in one place.",
    description:
      "Manufacturing management covering bills of materials, manufacturing and work orders, work centres and a live stock ledger. It has role-based access for admins, managers and operators, JWT auth and rate-limited APIs.",
    features: [
      "Manufacturing orders with status tracking",
      "Work orders with progress monitoring",
      "Bills of materials with component tracking",
      "Work centres and capacity planning",
      "Stock ledger for inventory",
      "Admin, manager and operator roles"
    ],
    architecture:
      "A Next.js 14 frontend using Tailwind, Radix UI and Recharts, backed by an Express API on MongoDB with Mongoose. JWT authentication, bcrypt hashing, Helmet, CORS and rate limiting protect the API.",
    tech: ["Next.js", "Express", "MongoDB", "Recharts"],
    github: gh("ProdEase"),
    live: ""
  }
];

export const moreWork = [
  { name: "ReNova", note: "Second-hand marketplace with CO₂ impact tracking", github: gh("ReNova"), live: "https://re-nova.vercel.app" },
  { name: "ServeToSave", note: "Food redistribution for donors, NGOs and corporates", github: gh("ServeToSave") },
  { name: "Event-Flow", note: "Event planning with tasks, vendors and roles (Prisma + Postgres)", github: gh("Event-Flow") },
  { name: "AirSwap", note: "Satellite-NDVI verified oxygen credits", github: gh("Air-Swap") },
  { name: "Jumbled-Frames", note: "Reordering shuffled video frames with CV and 2-opt", github: gh("Jumbled-Frames-Reconstruction") },
  { name: "BankEase", note: "Mobile banking app with PIN auth and atomic transfers", github: gh("BankEase") }
];

export const skillGroups = [
  { label: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion" },
  { label: "Backend", items: "Node.js, Express, FastAPI, REST APIs, JWT" },
  { label: "Data", items: "MongoDB, PostgreSQL, Supabase, Firebase, Prisma" },
  { label: "AI & Tooling", items: "PyTorch, OpenCV, FAISS, Ollama, Git" }
];

export const socialLinks = {
  github: "https://github.com/geeky-vaiiib",
  linkedin: "https://www.linkedin.com/in/vaibhav-jp-687256314/",
  email: "mailto:geeky.vaiiib28@gmail.com",
  emailAddress: "geeky.vaiiib28@gmail.com"
};
