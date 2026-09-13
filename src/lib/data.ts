export type Programme = {
  id: string;
  name: string;
  school: string;
  degree: string;
  duration: string;
  ects: number;
  language: string;
  startMonths: string[];
  image: string;
  tag: string;
  description: string;
  highlights: string[];
};

export type Service = {
  id: string;
  title: string;
  category: "Academic" | "Career" | "Wellbeing" | "IT" | "Student Life";
  icon: string;
  short: string;
  description: string;
  features: string[];
  hours: string;
  location: string;
  color: string;
};

export type CampusEvent = {
  id: string;
  title: string;
  date: string; // ISO
  endDate?: string;
  time: string;
  location: string;
  category: "Social" | "Academic" | "Career" | "Sports" | "Cultural" | "Workshop";
  description: string;
  image: string;
  free: boolean;
  rsvp: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  programme: string;
  year: string;
  quote: string;
  image: string;
};

export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export type Org = {
  id: string;
  name: string;
  category: string;
  members: number;
  description: string;
  emoji: string;
  color: string;
};

export type Resource = {
  id: string;
  title: string;
  category: string;
  type: "Article" | "Tool" | "Download" | "Video" | "Template";
  readTime: string;
  description: string;
  icon: string;
};

export const programmes: Programme[] = [
  {
    id: "bba-international",
    name: "International Business",
    school: "Business & Hospitality",
    degree: "Bachelor of Business Administration",
    duration: "3.5 years",
    ects: 210,
    language: "English",
    startMonths: ["September", "January"],
    image: "/images/program-business.jpg",
    tag: "BBA",
    description:
      "Build a global career with a degree that blends strategic thinking, sustainable business, and cross-cultural leadership.",
    highlights: [
      "Double-degree pathways with 20+ partner universities",
      "Mandatory international exchange semester",
      "Live company projects every year",
      "Optional specialization in Marketing or Finance",
    ],
  },
  {
    id: "nursing",
    name: "Nursing",
    school: "Health & Welfare",
    degree: "Bachelor of Health Care",
    duration: "3.5 years",
    ects: 210,
    language: "English",
    startMonths: ["September"],
    image: "/images/program-health.jpg",
    tag: "BHc",
    description:
      "Train as a registered nurse with hands-on clinical practice in Finnish hospitals and a focus on evidence-based care.",
    highlights: [
      "EU-recognised nursing qualification",
      "Clinical placements from year one",
      "Simulation lab with high-fidelity mannequins",
      "Career mentoring from working nurses",
    ],
  },
  {
    id: "engineering-it",
    name: "Information & Communication Technology",
    school: "Engineering & Technology",
    degree: "Bachelor of Engineering",
    duration: "4 years",
    ects: 240,
    language: "English",
    startMonths: ["September", "January"],
    image: "/images/program-tech.jpg",
    tag: "BEng",
    description:
      "Become a software engineer, data specialist, or cybersecurity expert in a program built on real industry needs.",
    highlights: [
      "Specializations in AI, Cloud, or Cybersecurity",
      "Built-in internship semester",
      "Student-run consulting agency projects",
      "Access to a modern DevOps lab",
    ],
  },
  {
    id: "media-arts",
    name: "Media, Visual Arts & Production",
    school: "Culture & Media",
    degree: "Bachelor of Culture and Arts",
    duration: "3.5 years",
    ects: 210,
    language: "English",
    startMonths: ["September"],
    image: "/images/program-media.jpg",
    tag: "BCA",
    description:
      "Tell stories across film, photography, sound, and interactive media with industry-grade tools and studios.",
    highlights: [
      "Full access to TV studio, edit suites and sound stage",
      "Annual film festival run by students",
      "Personal mentor from the creative industry",
      "Portfolio reviews with visiting art directors",
    ],
  },
  {
    id: "social-services",
    name: "Social Services",
    school: "Health & Welfare",
    degree: "Bachelor of Social Services",
    duration: "3.5 years",
    ects: 210,
    language: "English",
    startMonths: ["September"],
    image: "/images/program-social.jpg",
    tag: "BSS",
    description:
      "Work with individuals, families, and communities — combining theory with placements across social welfare settings.",
    highlights: [
      "Practice-based learning in multicultural Helsinki",
      "Trauma-informed and rights-based approach",
      "Strong focus on inclusive and ethical practice",
      "Direct path to a regulated social-services career",
    ],
  },
  {
    id: "energy-sustainability",
    name: "Energy & Environmental Engineering",
    school: "Engineering & Technology",
    degree: "Bachelor of Engineering",
    duration: "4 years",
    ects: 240,
    language: "English",
    startMonths: ["September"],
    image: "/images/program-engineering.jpg",
    tag: "BEng",
    description:
      "Design the energy systems of tomorrow — wind, solar, hydrogen, smart grids — and lead the green transition.",
    highlights: [
      "Energy lab with grid simulation software",
      "Joint projects with Nordic energy utilities",
      "Specialize in renewables or smart systems",
      "Thesis work in collaboration with industry",
    ],
  },
];

export const services: Service[] = [
  {
    id: "library",
    title: "Arcada Library",
    category: "Academic",
    icon: "Library",
    short: "Open study spaces, course books, e-resources, and librarian guidance.",
    description:
      "Our library sits at the heart of campus. Borrow course literature, access thousands of e-journals, reserve a group room, or ask our subject librarians for help with literature searches and references.",
    features: [
      "10,000+ e-books and 25,000+ journals",
      "Six bookable group study rooms",
      "Subject librarians per school",
      "Inter-library loans across Finland",
    ],
    hours: "Mon–Thu 8–20, Fri 8–17",
    location: "Floor 2, Main Building",
    color: "from-amber-100 to-orange-200",
  },
  {
    id: "career",
    title: "Career Services",
    category: "Career",
    icon: "Briefcase",
    short: "CV reviews, mock interviews, job listings, and one-on-one coaching.",
    description:
      "We help you translate what you study into a career you love. Drop in for a CV check, book a 1:1 career coaching session, or browse hundreds of internship and graduate vacancies.",
    features: [
      "Free 1:1 career coaching",
      "Annual Career Fair with 40+ employers",
      "Alumni mentoring program",
      "Internship database updated weekly",
    ],
    hours: "Mon–Fri 9–16",
    location: "Floor 3, Student Hub",
    color: "from-emerald-100 to-teal-200",
  },
  {
    id: "wellbeing",
    title: "Student Wellbeing",
    category: "Wellbeing",
    icon: "Heart",
    short: "Free counselling, peer support, and study-wellbeing workshops.",
    description:
      "Studying abroad is exciting and challenging. Our wellbeing team offers confidential counselling in English, peer-support groups, and short courses on stress, sleep, and study skills.",
    features: [
      "Confidential 1:1 counselling",
      "On-campus chapel & quiet room",
      "Peer support and buddy program",
      "Workshops on resilience & focus",
    ],
    hours: "Mon–Fri 9–17 (24/7 crisis line)",
    location: "Floor 1, Wellbeing Centre",
    color: "from-rose-100 to-pink-200",
  },
  {
    id: "it-support",
    title: "IT & Digital Tools",
    category: "IT",
    icon: "Laptop",
    short: "Accounts, software, Wi-Fi help, and the tools you need to study.",
    description:
      "Get your student account, install Arcada-licensed software (Microsoft 365, SPSS, Adobe), connect to campus Wi-Fi, or borrow a laptop for the day from our helpdesk.",
    features: [
      "Microsoft 365 & Adobe Creative Cloud",
      "Free VPN and cloud storage",
      "Walk-in helpdesk 5 days a week",
      "Equipment loans (cameras, mics, tablets)",
    ],
    hours: "Mon–Fri 8–18",
    location: "Floor 1, IT Helpdesk",
    color: "from-sky-100 to-indigo-200",
  },
  {
    id: "exchange",
    title: "International Exchange",
    category: "Academic",
    icon: "Globe",
    short: "Spend a semester abroad at one of our 90+ partner universities.",
    description:
      "Whether you want a warm winter in Barcelona or a research term in Tokyo, our international office helps you choose, apply, and get credit for your exchange semester.",
    features: [
      "90+ partner universities worldwide",
      "Erasmus+ and Nordplus funding",
      "Pre-departure and re-entry workshops",
      "Free language courses (Swedish, Spanish, more)",
    ],
    hours: "Mon–Fri 9–16",
    location: "Floor 2, International Office",
    color: "from-violet-100 to-purple-200",
  },
  {
    id: "startup",
    title: "Arcada Startup Edge",
    category: "Career",
    icon: "Rocket",
    short: "Turn your idea into a company — coaching, funding, and co-working.",
    description:
      "A pre-incubator for student founders. Get matched with mentors, apply for micro-grants, and work from our co-working space just off campus.",
    features: [
      "Up to €5,000 in micro-grants",
      "Mentor network of 30+ founders",
      "Co-working space & demo days",
      "Free legal and IP advice",
    ],
    hours: "Mon–Fri 10–17",
    location: "Off-campus Hub, Arabiankatu",
    color: "from-orange-100 to-amber-200",
  },
  {
    id: "tutoring",
    title: "Peer Tutoring",
    category: "Academic",
    icon: "GraduationCap",
    short: "Get unstuck with help from upper-year students who've been there.",
    description:
      "Book a 30-minute tutoring session in maths, programming, writing, or stats. Tutoring is free, voluntary, and run by students who excelled in the course last year.",
    features: [
      "Free 30-minute sessions",
      "Online and on-campus",
      "Tutors in 25+ subjects",
      "Drop-in writing clinic weekly",
    ],
    hours: "Mon–Thu 14–19",
    location: "Library group rooms",
    color: "from-lime-100 to-emerald-200",
  },
  {
    id: "housing",
    title: "Housing Support",
    category: "Student Life",
    icon: "Home",
    short: "Find a room, navigate your lease, and settle into Helsinki.",
    description:
      "New to Finland? Our housing team helps you compare HOAS options, understand your tenancy rights, and avoid the most common rental scams targeting international students.",
    features: [
      "HOAS application walk-through",
      "Lease review service",
      "Tenant rights workshops",
      "Furniture recycling program",
    ],
    hours: "Tue & Thu 12–16",
    location: "Floor 1, Service Desk",
    color: "from-yellow-100 to-amber-200",
  },
];

export const events: CampusEvent[] = [
  {
    id: "orientation-week",
    title: "Autumn Orientation Week",
    date: "2026-09-01",
    endDate: "2026-09-05",
    time: "All day",
    location: "Arcada Campus",
    category: "Social",
    description:
      "Five days of campus tours, city walks, meet-your-class picnics and the legendary Welcome Party at Kupla.",
    image: "/images/event-social.jpg",
    free: true,
    rsvp: true,
  },
  {
    id: "career-fair",
    title: "Arcada Career Fair 2026",
    date: "2026-10-14",
    time: "10:00 – 16:00",
    location: "Main Auditorium Foyer",
    category: "Career",
    description:
      "Meet 40+ Nordic employers recruiting for internships, theses and graduate roles. Bring your CV and your best questions.",
    image: "/images/career.jpg",
    free: true,
    rsvp: false,
  },
  {
    id: "film-festival",
    title: "Arcada Student Film Festival",
    date: "2026-11-21",
    endDate: "2026-11-22",
    time: "17:00 – 22:00",
    location: "Black Box Theatre",
    category: "Cultural",
    description:
      "Two nights of premieres from our Media students — short films, docs, and VR pieces, judged by an industry panel.",
    image: "/images/program-media.jpg",
    free: true,
    rsvp: true,
  },
  {
    id: "hackathon",
    title: "Green Energy Hackathon",
    date: "2026-10-25",
    time: "09:00 – 18:00",
    location: "DevOps Lab",
    category: "Workshop",
    description:
      "48-hour sprint to prototype software that makes Nordic energy grids smarter. Mentors from Fortum and Helen.",
    image: "/images/program-tech.jpg",
    free: true,
    rsvp: true,
  },
  {
    id: "wellbeing-day",
    title: "Wellbeing Wednesday",
    date: "2026-09-17",
    time: "11:00 – 15:00",
    location: "Campus Courtyard",
    category: "Sports",
    description:
      "Free yoga, breathing workshops, smoothie bikes and therapy dogs. Drop in between lectures.",
    image: "/images/wellness.jpg",
    free: true,
    rsvp: false,
  },
  {
    id: "research-night",
    title: "Arcada Research Night",
    date: "2026-11-06",
    time: "17:00 – 21:00",
    location: "Main Auditorium",
    category: "Academic",
    description:
      "Lightning talks from our researchers on AI ethics, sustainable care, and the future of work in the Nordics.",
    image: "/images/students-studying.jpg",
    free: true,
    rsvp: true,
  },
  {
    id: "alumni-homecoming",
    title: "Alumni Homecoming",
    date: "2026-11-29",
    time: "18:00 – 23:00",
    location: "Main Building Lobby",
    category: "Social",
    description:
      "Reconnect with classmates, meet the new generation, and dance into the small hours at the official reunion.",
    image: "/images/graduation.jpg",
    free: false,
    rsvp: true,
  },
  {
    id: "lunch-talk",
    title: "Lunch & Learn: AI in Healthcare",
    date: "2026-09-24",
    time: "12:00 – 13:00",
    location: "Cafeteria Stage",
    category: "Academic",
    description:
      "Free lunch while a guest speaker unpacks how AI tools are changing clinical practice — and what nurses should know.",
    image: "/images/cafeteria.jpg",
    free: true,
    rsvp: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Amina Yusuf",
    programme: "Nursing, 2nd year",
    year: "2024",
    quote:
      "I came from Kenya and within a week I had a tutor, a mentor, and a friend group. The simulations lab feels like working in a real ward — I start my first placement in March.",
    image: "/images/student-1.jpg",
  },
  {
    id: "testimonial-2",
    name: "Lucas Becker",
    programme: "ICT, 4th year",
    year: "2024",
    quote:
      "The mandatory internship sent me to a Helsinki fintech where I now work part-time. My thesis is built on their data pipeline. It doesn't get more real than that.",
    image: "/images/student-2.jpg",
  },
  {
    id: "testimonial-3",
    name: "Sofia Marín",
    programme: "International Business, exchange",
    year: "2025",
    quote:
      "I spent my exchange semester at Arcada and it was the highlight of my degree. The teachers actually know your name, the campus has a sauna with a view, and Helsinki is magic in winter.",
    image: "/images/student-3.jpg",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "Admissions",
    question: "When is the application period for bachelor's programmes?",
    answer:
      "Joint application to Arcada runs twice a year — in January for autumn start and in September for January start. Some programmes use rolling admissions or separate entrance exams, so always check the programme page.",
  },
  {
    id: "faq-2",
    category: "Admissions",
    question: "Do I need to speak Finnish or Swedish to apply?",
    answer:
      "No. All Arcada bachelor's programmes taught in English accept applications with proof of English proficiency (IELTS 6.0 or equivalent). Finnish and Swedish language courses are included for free.",
  },
  {
    id: "faq-3",
    category: "Tuition",
    question: "How much does tuition cost and are there scholarships?",
    answer:
      "EU/EEA students study tuition-free. Non-EU students pay €8,000 per academic year, with an early-bird discount of 50% in year one and merit-based waivers of up to 100% available from year two.",
  },
  {
    id: "faq-4",
    category: "Student life",
    question: "Where will I live and what does housing cost?",
    answer:
      "Most students live in HOAS (Helsinki Student Housing). Rooms in shared flats start at €280/month and studios at €600. Our housing team helps you apply before you arrive.",
  },
  {
    id: "faq-5",
    category: "Study",
    question: "What is the academic year structure?",
    answer:
      "Two semesters (Sept–Dec, Jan–May) with four-week exam periods. Each course is worth 5 or 10 ECTS. You typically take 30 ECTS per semester.",
  },
  {
    id: "faq-6",
    category: "Career",
    question: "How quickly do graduates find work?",
    answer:
      "87% of Arcada graduates are employed or in further studies within six months. Engineering, nursing and ICT graduates have near-100% placement thanks to Finland's labour shortage.",
  },
];

export const organisations: Org[] = [
  {
    id: "arcada-solutions",
    name: "Arcada Solutions",
    category: "Tech & Consulting",
    members: 28,
    description: "Student-run IT consultancy — real client projects, real invoices, real impact.",
    emoji: "💻",
    color: "bg-amber-100",
  },
  {
    id: "kultsi",
    name: "Kultsi Media Collective",
    category: "Arts & Culture",
    members: 42,
    description: "Film, photo and podcast club. Equipment lending, group shoots, and weekly crit sessions.",
    emoji: "🎬",
    color: "bg-rose-100",
  },
  {
    id: "esn",
    name: "ESN Arcada",
    category: "International",
    members: 65,
    description: "Erasmus Student Network — buddy program, trips, language tandems, and the famous Sitsi dinners.",
    emoji: "🌍",
    color: "bg-emerald-100",
  },
  {
    id: "stk",
    name: "Arcada Student Union (ASK)",
    category: "Advocacy",
    members: 1200,
    description: "The official student union representing every Arcada student. Membership is mandatory and worth every euro.",
    emoji: "🗳️",
    color: "bg-indigo-100",
  },
  {
    id: "sports",
    name: "Arcada Sports Club",
    category: "Wellbeing",
    members: 95,
    description: "Football, floorball, running, climbing, and the legendary Friday-morning sauna-and-swim.",
    emoji: "🏃",
    color: "bg-lime-100",
  },
  {
    id: "nurse-network",
    name: "Future Nurses Network",
    category: "Academic",
    members: 48,
    description: "Peer-led case studies, conference trips, and clinical skill practice outside of class.",
    emoji: "🩺",
    color: "bg-sky-100",
  },
];

export const resources: Resource[] = [
  {
    id: "resource-1",
    title: "The First-Week Survival Guide",
    category: "Getting started",
    type: "Article",
    readTime: "8 min",
    description: "Everything you need to do before and during your first week on campus.",
    icon: "BookOpen",
  },
  {
    id: "resource-2",
    title: "Time-blocking Template",
    category: "Study skills",
    type: "Template",
    readTime: "—",
    description: "Printable weekly planner our top students swear by during exam periods.",
    icon: "Calendar",
  },
  {
    id: "resource-3",
    title: "How to write a thesis at Arcada",
    category: "Academic writing",
    type: "Article",
    readTime: "12 min",
    description: "From topic selection to the maturity test — a clear walkthrough of the process.",
    icon: "FileText",
  },
  {
    id: "resource-4",
    title: "Arcada Microsoft 365 Setup",
    category: "IT & Tools",
    type: "Video",
    readTime: "4 min watch",
    description: "Sign in, install, share files, collaborate — five minutes of screen recording.",
    icon: "PlayCircle",
  },
  {
    id: "resource-5",
    title: "Citation styles: APA, Harvard, IEEE",
    category: "Academic writing",
    type: "Tool",
    readTime: "—",
    description: "Pick your discipline and get examples, rules, and a checker for the most common pitfalls.",
    icon: "Bookmark",
  },
  {
    id: "resource-6",
    title: "Living in Helsinki — cost calculator",
    category: "Practical life",
    type: "Tool",
    readTime: "—",
    description: "Estimate your monthly budget based on housing, food, transport and lifestyle.",
    icon: "Calculator",
  },
  {
    id: "resource-7",
    title: "Wellbeing self-check",
    category: "Wellbeing",
    type: "Tool",
    readTime: "5 min",
    description: "A 12-question screening used by our counsellors. Confidential, no email required.",
    icon: "Heart",
  },
  {
    id: "resource-8",
    title: "Career planning workbook",
    category: "Career",
    type: "Download",
    readTime: "—",
    description: "Six exercises to map your strengths, values and next-step experiments.",
    icon: "Briefcase",
  },
];

export const stats = [
  { number: "11 000+", label: "Students from 80 countries" },
  { number: "90+", label: "Partner universities worldwide" },
  { number: "87%", label: "Graduates employed within 6 months" },
  { number: "30+", label: "Student organisations on campus" },
];

export const calendarItems = [
  { date: "Aug 28", event: "Welcome Day (new students)" },
  { date: "Sep 1", event: "Autumn semester begins" },
  { date: "Sep 1–5", event: "Orientation Week" },
  { date: "Sep 17", event: "Wellbeing Wednesday" },
  { date: "Oct 14", event: "Career Fair" },
  { date: "Oct 25", event: "Green Energy Hackathon" },
  { date: "Nov 6", event: "Research Night" },
  { date: "Nov 21", event: "Student Film Festival" },
  { date: "Dec 13", event: "Autumn exam period ends" },
  { date: "Jan 7", event: "Spring semester begins" },
];

export const studentLifeCategories = [
  {
    title: "Eat & drink",
    image: "/images/cafeteria.jpg",
    items: [
      { name: "Campus Cafeteria", note: "Lunch €4.20 student price" },
      { name: "Kipsari Café", note: "Coffee, salad bowls, smoothies" },
      { name: "Library Lounge", note: "Fika & study snacks" },
      { name: "Rooftop Sauna", note: "Free for students, weekly slots" },
    ],
  },
  {
    title: "Move & play",
    image: "/images/wellness.jpg",
    items: [
      { name: "Arcada Sports Hall", note: "Free gym access with student card" },
      { name: "Running club", note: "Tuesdays at 17:00" },
      { name: "Climbing wall", note: "Open 7 days, €5 with student ID" },
      { name: "Outdoor trips", note: "Husky hikes, ice swimming, archipelago kayaks" },
    ],
  },
  {
    title: "Create & perform",
    image: "/images/program-media.jpg",
    items: [
      { name: "TV & Sound Studios", note: "Bookable by all students" },
      { name: "Maker Space", note: "3D printers, laser cutter, sewing" },
      { name: "Black Box Theatre", note: "Open stage nights monthly" },
      { name: "Student Magazine", note: "Print & online — join the editorial team" },
    ],
  },
  {
    title: "Get involved",
    image: "/images/event-social.jpg",
    items: [
      { name: "Student Union ASK", note: "Mandatory membership, real power" },
      { name: "30+ Clubs", note: "From chess to salsa to sustainability" },
      { name: "Buddy Program", note: "Match with a local student" },
      { name: "Volunteer Corps", note: "Mentor a teen, save a forest" },
    ],
  },
];
