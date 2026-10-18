import type { OtherProject, Project, ProjectType } from "@/types/project";

export const projectTypeLabels: Record<ProjectType, string> = {
  client: "Client project",
  school: "School project",
  "school-exercise": "School exercise",
  personal: "Personal project",
};

// Facts come from the Obsidian project notes (PORTFOLIO/Projects), 07 Project Inventory
// and this repository. Leave fields out rather than guessing; missing content is
// tracked in Obsidian (15 Implementation Status), not here.
export const projects: Project[] = [
  {
    slug: "mpk-consulting",
    title: "MPK Consulting",
    type: "client",
    period: "Winter 2025/2026",
    year: 2026,
    role: "Student developer",
    featured: true,
    summary:
      "Multi-page company website for MPK Consulting Oy, presenting the company's services, project references and expertise.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    highlights: [
      "Next.js App Router site with typed content separated from presentation",
      "Contact form built with a Server Action and Resend, with the API key kept out of source code",
      "SEO metadata, structured data and responsive layouts",
      "Deployed on Vercel with GitHub integration, preview deployments and a custom domain",
    ],
    image: {
      src: "/images/projects/mpk-consulting/homepage.webp",
      alt: "MPK Consulting home page on desktop: navigation and an introduction to on-site E&I leadership, with key figures for experience, project scale and safety.",
    },
    links: [{ label: "Live site", href: "https://mpk-consulting.net/" }],
    caseStudy: {
      overview:
        "A company website for MPK Consulting Oy. The goal was to present the company's services, project references and expertise through a multi-page website with Home, About, Services, Projects, Contact and 404 pages.",
      built: [
        "Next.js App Router site with typed content and data structures",
        "Reusable React components and responsive navigation",
        "Services and project reference sections",
        "Contact form using a Server Action and Resend",
        "SEO metadata and structured data",
        "Semantic HTML and responsive layouts",
      ],
      architecture:
        "Next.js App Router with TypeScript. Content and data are separated from presentation and rendered through reusable components. The contact form is handled server-side, and the structure is prepared for a possible future CMS migration.",
      security: [
        "Secrets such as the API key kept outside committed source code using environment variables",
      ],
      deployment: [
        "Vercel with GitHub integration and automatic deployments",
        "Pull request preview deployments",
        "Environment variables for secrets",
        "Custom domain with SSL and CDN",
      ],
      // Solutions are not documented yet, so the challenges stay problems only.
      challenges: [
        { problem: "Learning TypeScript and Next.js and understanding how components fit together" },
        { problem: "Optimizing speed and SEO" },
        { problem: "Mobile navigation and navigation behavior" },
        { problem: "TypeScript build errors" },
        { problem: "React hooks" },
      ],
      learned: [
        "Once I understood the component structure, I found the technologies enjoyable to work with and gained confidence in building the application",
        "Server Actions and environment variables",
        "SEO metadata and structured data",
      ],
      images: [
        {
          src: "/images/projects/mpk-consulting/homepage.webp",
          alt: "MPK Consulting home page on desktop: navigation and an introduction to on-site E&I leadership, with key figures for experience, project scale and safety.",
          caption: "Home page on desktop.",
        },
        {
          src: "/images/projects/mpk-consulting/mobile.webp",
          alt: "MPK Consulting on a phone: the collapsed menu and the Execution Framework section with numbered project phases.",
          caption: "Mobile layout with a collapsed navigation menu.",
          device: "mobile",
        },
      ],
    },
  },
  {
    slug: "pielaveden-keilahalli",
    title: "Pielaveden Keilahalli",
    type: "client",
    period: "Spring 2026",
    year: 2026,
    role: "Design and implementation",
    featured: true,
    summary:
      "Responsive WordPress website for Pielaveden Keilahalli, built for clear UI, maintainability and content the client can manage without programming.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "ACF"],
    highlights: [
      "Astra child theme with a custom header rendered through WordPress hooks",
      "Competitions stored as a custom post type with ACF fields and listed with WP_Query, including an archive of past competitions",
      "Client-managed content, user roles and client documentation",
      "Published on a domain and hosting service, including SMTP email configuration",
    ],
    image: {
      src: "/images/projects/pielaveden-keilahalli/homepage.webp",
      alt: "Pielaveden Keilahalli home page on desktop: navigation with a lane booking button, and cards for weekly bowling activities and competitions.",
    },
    links: [{ label: "Live site", href: "https://pielavedenkeilahalli.fi/" }],
    caseStudy: {
      overview:
        "A modern, responsive WordPress website for a real client, focusing on clear UI, maintainability and practical content management. The site covers the home page, competitions and a competition archive, competition sign-up, the club, membership applications, contact details with Google Maps, opening hours, activities and restaurant menu content.",
      built: [
        "Astra child theme with a custom PHP header rendered through WordPress hooks, replacing the default Astra header",
        "Custom navigation with dropdowns, a mobile hamburger menu and a sticky header",
        "Competition archive built on the same custom post type and WordPress queries",
        "Competition cards generated dynamically with PHP and WP_Query, with poster, status, name, description and one or two client-configured links",
        "Responsive card layout with hover interaction, poster zoom, a \"show more\" overlay and a lightbox",
        "Content management that lets the client add, edit and publish competitions without programming",
      ],
      database: [
        "Competitions stored as a custom post type",
        "ACF fields for poster, status, name, short description, button text and URL, and an optional second button",
      ],
      security: ["User roles and permissions for client-managed content"],
      deployment: [
        "Published to a domain and hosting provider",
        "Domain email accounts and SMTP email configuration",
        "Hosting management with cPanel",
      ],
      learned: [
        "WordPress child themes, PHP and hooks",
        "Custom post types, ACF and dynamic content with WP_Query",
        "Domains, hosting, SMTP email and database management with cPanel and phpMyAdmin",
        "SEO and image optimization",
        "Writing documentation for the client",
      ],
      images: [
        {
          src: "/images/projects/pielaveden-keilahalli/homepage.webp",
          alt: "Pielaveden Keilahalli home page on desktop: navigation with a lane booking button, and cards for weekly bowling activities and competitions.",
          caption: "Weekly activities and competitions on the home page.",
        },
      ],
    },
  },
  {
    // Facts from the project's Obsidian notes (Projects/AI Lomake) and its public
    // README. Not featured on Home until the featured selection is decided.
    slug: "lomakeavustin",
    title: "Lomakeavustin: Smart Form Assistant",
    type: "school",
    period: "Autumn 2026",
    year: 2026,
    role: "Planning, requirements and AI-assisted development",
    status: "In progress",
    featured: false,
    summary:
      "School MVP for health-related pre-information forms: database-driven dynamic forms, role-based access and a locally hosted AI model that explains questions and suggests a suitable form. Uses synthetic data only.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MariaDB",
      "Docker Compose",
      "Ollama",
    ],
    highlights: [
      "Dynamic forms built from the database, validated by an Express and TypeScript API",
      "Session-based roles for customers, administrators and professionals, enforced in the backend",
      "Local Ollama model for question explanations and form suggestions, with strict limits on what it receives",
      "Security gaps and planned improvements documented alongside the implemented features",
    ],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/lomake_avustin" },
    ],
    caseStudy: {
      overview:
        "Lomakeavustin is an MVP of a smart form assistant for health-related pre-information forms. Customers fill in forms generated from the database, save drafts, reuse their own earlier answers with consent and review a summary before submitting. A local AI model explains questions in plain Finnish and can suggest a suitable form. Professionals see only the customers an administrator has assigned to them. It is an ongoing learning project that uses synthetic data only and is not a production healthcare system.",
      problem:
        "The project is built around two challenge themes from its brief: making use of information a customer has already given, and giving a professional a single view of a customer. The goal was a simple, working MVP: forms defined in the database, reliable validation, drafts, consent-based prefill, plain-language help for difficult questions and a summary before submission. The AI may explain and suggest, but it must not diagnose, make medical decisions or invent answers.",
      requirements: [
        "Administrators create form templates with text, number, date and selection fields, required flags, field order and draft or published status",
        "Customers fill in forms generated from the database and get field-level validation errors without losing the values they entered",
        "An incomplete form can be saved as a draft and continued later; customers see only their own drafts",
        "Earlier information is used for prefill only after the customer agrees; prefilled fields are marked and stay editable",
        "An AI explanation states what a question asks, never answers for the customer, is labeled as AI output and can be closed; an AI failure must not block the form",
        "All answers are shown in a summary before a separate final confirmation, and a submitted form gets a status and a reference code",
      ],
      architecture:
        "A Next.js and TypeScript frontend with Tailwind CSS talks only to its own origin. Next.js proxies API requests to an Express and TypeScript REST API, which is the only authority for access control and the only component that talks to MariaDB and to the AI model. The browser never calls the model directly. The model runs locally with Ollama and is optional: without it the AI features return a generic error and the forms keep working. The frontend, backend and database run with Docker Compose during development.",
      database: [
        "11 tables covering users and sessions, customer profiles, form templates and fields, submissions and answers, customers' descriptions of why they seek help, professional-customer assignments and question snapshots",
        "Schema defined in numbered SQL files with primary, foreign and unique keys, indexes and CHECK constraints",
        "Sessions store only a SHA-256 hash of the cookie token",
        "A submitted form copies its questions into a snapshot table in the same transaction, so later template edits do not change it",
      ],
      databaseDiagram: {
        src: "/projects/lomakeavustin/lomakeavustin-er.png",
        alt: "ER diagram of the Lomakeavustin MariaDB schema: users with profiles, sessions, symptom descriptions, customer contacts and professional-customer assignments; form templates with fields; form submissions with answers and question snapshots.",
        caption: "Database schema with 11 tables.",
        width: 3844,
        height: 2832,
      },
      implemented: [
        "Session-based login with Argon2id password hashing and three roles: customer, administrator and professional",
        "Form template management for administrators: fields, ordering, publishing and unpublishing",
        "Dynamic form filling with backend validation of every answer against the stored field definitions",
        "Drafts that can be saved incomplete and are fully validated on submission",
        "Consent-based prefill from the customer's own latest submitted form",
        "Summary and separate confirmation before submission, with a reference code afterwards",
        "Customer profile, the customer's own submitted forms and a page for describing why they are seeking help",
        "AI question explanations and AI form suggestions through the local model, both labeled as AI output",
        "Professional dashboard with aggregate counts, and read-only access to customers assigned by an administrator with a purpose and an optional expiry",
        "Eight self-made synthetic demo forms and a repeatable seed script",
      ],
      workflow: [
        "I defined the goals, requirements and intended user experience, and wrote the user stories",
        "Planning, documentation, implementation code and tests were AI-assisted, with the work split into GitHub issues that I guided",
        "I reviewed the generated code, checked it against the requirements, ran the development checks and tested the features manually",
        "When the AI misunderstood a requirement, I clarified the expected behavior and reviewed the revised implementation",
      ],
      security: [
        "Synthetic test data only; no real patient or health information",
        "The backend reads the session and role from the database on every request and takes the owner from the session, rejecting unexpected keys such as user ids",
        "Professionals see a customer only through an assignment made by an administrator; unassigned, expired and unknown customers all return the same 404",
        "Argon2id password hashing, an HTTP-only session cookie and parameterized SQL queries",
        "The AI model receives only question metadata, or the customer's current description when they ask for a suggestion; tests check exactly what it receives, and the backend validates the output",
        "Local inference avoids sending prompts to a third-party AI API, but running locally does not by itself make the system secure",
        "Generic error responses, and no logging of descriptions or AI responses",
      ],
      securityGaps: [
        "No rate limiting on login or the AI routes",
        "No audit log of which professional viewed which customer's information",
        "Customers cannot yet edit or delete their descriptions, and data export and deletion are not defined",
        "The question explanation route accepts any question text, so it can be used as a limited text generator",
        "Prompts reduce, but cannot prevent, incorrect or diagnosis-like output from the small model",
        "Not assessed against GDPR requirements for health data, the EU AI Act or medical device rules, and not ready for production",
      ],
      challenges: [
        {
          problem:
            "Integration test files running in parallel against one shared database deadlocked each other's setup and cleanup.",
          solution:
            "The suite now runs test files one at a time; twelve consecutive runs passed after the change.",
        },
        {
          problem:
            "The MariaDB driver adds query values to error messages by default, so a failed save could have written form answers to the error log.",
          solution:
            "Parameter logging was turned off for the whole connection pool, which covers every route.",
        },
        {
          problem:
            "An extra prompt instruction meant to return no suggestion for practical questions, such as opening hours, did not change the behavior, and one reason wrongly claimed a form covered opening hours.",
          solution:
            "The prompt change was reverted and the behavior documented as a known limitation. The customer always decides, and the full form list stays available.",
        },
        {
          problem:
            "Editing a form template would have changed how earlier submissions are displayed.",
          solution:
            "Questions are copied into a snapshot table at submission time. Older submissions were backfilled from the forms as they were then, which is a best-effort copy.",
        },
      ],
      planned: [
        "Restrict network access to the Ollama API and verify the restriction",
        "Add security headers, rate limiting and a production configuration",
        "Audit logging for professionals' access to customer information",
        "Define and implement data export and deletion for users",
        "Run the complete automated test suite in one verified test environment",
        "Improve the quality of Finnish AI responses and error handling",
        "A reliable database migration workflow instead of applying SQL files by hand",
        "Complete the project documentation and testing evidence",
      ],
      status:
        "In progress. The core MVP features work, and 258 of 259 backend tests passed in the latest documented run; the last one is skipped in the container and passes when run separately. It is a demo for synthetic data only.",
    },
  },
  {
    slug: "teo",
    title: "TEO: Work-Based Learning Management",
    type: "school",
    period: "2026",
    year: 2026,
    role: "Planning and implementation",
    status: "In progress",
    featured: true,
    summary:
      "School project in progress: a system for managing work-based learning periods, students, workplaces and workplace supervisors.",
    technologies: ["PHP", "JavaScript", "MariaDB", "SQL", "PDO"],
    highlights: [
      "Relational data model and ER diagram with primary and foreign keys",
      "PHP and PDO for server-side logic and database access",
      "Object-oriented JavaScript using fetch to talk to a REST-type PHP API",
      "CRUD operations from the frontend through the API to the database",
    ],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/hallintajarjestelma-teo" },
    ],
    caseStudy: {
      overview:
        "A school project in which I design and implement a system for managing work-based learning periods. The system is meant to manage students, workplaces, workplace supervisors, work-based learning periods, demonstrations, assessments and student progress. It is designed around the information needed to manage work-based learning and is limited to essential functionality.",
      built: [
        "Data model with entities, attributes, primary and foreign keys and basic normalization",
        "ER diagram of the database structure and relationships",
        "MariaDB/MySQL database with separate tables for each entity",
        "PHP server-side logic using PDO to retrieve, insert and update data and handle submitted data",
        "Object-oriented JavaScript frontend with event handling, DOM manipulation and fetch requests to the PHP/API layer",
      ],
      architecture:
        "An HTML and CSS user interface, object-oriented JavaScript in the browser, a REST-type PHP API layer, PDO for database access and a MariaDB/MySQL database.",
      database: [
        "Relationships between students, work-based learning periods, workplaces and workplace supervisors",
        "Relationships implemented with identifiers and foreign keys",
        "SQL: CREATE TABLE, INSERT, SELECT, UPDATE, DELETE, JOIN, WHERE and ORDER BY",
        "Database management with phpMyAdmin",
      ],
      databaseDiagram: {
        src: "/projects/teo/teo-jakso.drawio.png",
        alt: "ER diagram of the TEO database with tables for students, work-based learning periods, workplaces, workplace supervisors, teachers and demonstrations, linked by primary and foreign keys.",
        caption: "ER diagram of the database structure and relationships.",
        width: 680,
        height: 632,
      },
      learned: [
        "How a database-driven web application is designed and built as a complete system, from the frontend through JavaScript and the PHP API to the database",
        "Why the database structure should be designed before implementation: a clear data model makes SQL queries and application development easier to manage",
        "Database design, ER modeling and SQL",
        "PHP server-side programming with PDO",
        "JavaScript OOP and frontend/backend integration",
        "Git, GitHub and project documentation",
      ],
      // Only what "What I learned" does not already cover.
      demonstrates: [
        "Requirements analysis",
        "CRUD functionality",
        "Planning work with GitHub Issues",
      ],
      result:
        "The project combines database structure, backend logic and frontend in one application instead of focusing only on the UI. It has strengthened my interest in application development, APIs and backend programming.",
    },
  },
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    type: "personal",
    period: "2026",
    year: "ongoing",
    status: "In progress",
    featured: true,
    summary:
      "This site: a static Next.js site where project pages are generated from typed data, with a small design system and an issue-based GitHub workflow.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Docker"],
    highlights: [
      "Typed project data separated from presentation",
      "Design tokens defined as CSS variables and used through Tailwind",
      "Docker-based development environment",
      "AI-assisted planning and implementation, with each change in a GitHub issue and pull request",
    ],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/portfolio" },
    ],
    caseStudy: {
      // "Implemented" instead of "What I built": the code was written with AI assistance.
      implemented: [
        "Design tokens for colors, typography, spacing, radii and motion as CSS variables mapped to Tailwind",
        "Responsive header with a keyboard-accessible mobile navigation",
        "Typed project data with case study pages and a projects overview generated from it",
        "SEO metadata, a generated share image, sitemap and robots.txt",
        "Skip link and a custom 404 page",
        "Docker development environment with named volumes for dependencies and build cache",
      ],
      workflow: [
        "Planning and implementation were AI-assisted",
        "Each change starts from a GitHub issue and goes through a feature branch and pull request that I merge",
        "Project facts come from my own project notes; missing details are left out instead of guessed",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

// Kept separate from `projects` so these do not get case study pages.
// Facts come from 07 Project Inventory, the project READMEs and the owner.
export const otherProjects: OtherProject[] = [
  {
    slug: "opiskelijahelpdesk",
    title: "OpiskelijaHelpdesk",
    type: "school",
    period: "Autumn 2026",
    year: 2026,
    summary:
      "A ticket system for students' technical support requests, with separate student, support and admin roles. A school assignment I continued as my own project.",
    technologies: ["PHP", "JavaScript", "MariaDB", "PDO", "Docker"],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/opiskelijahelpdesk" },
    ],
  },
  {
    slug: "retkikohteet",
    title: "Retkikohteet",
    type: "school",
    period: "Autumn 2026",
    year: 2026,
    summary:
      "A web application for managing hiking destinations, with map-based location picking and weather data from the Open-Meteo API. A school assignment I continued as my own project.",
    technologies: ["PHP", "JavaScript", "MariaDB", "PDO", "Leaflet", "Open-Meteo API", "Docker"],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/retkikohteet" },
    ],
  },
];

// Early school work shown only on the /projects timeline, not on Home.
export const earlyProjects: OtherProject[] = [
  {
    slug: "terveyssivusto",
    title: "TerveysSivusto",
    type: "school",
    period: "April 2025",
    year: 2025,
    summary:
      "A basic PHP school project: a multi-page health website with a BMI calculator, a blood pressure category check and an exercise diary that saves entries to a text file and displays them in a chart.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "Chart.js"],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/TerveysSivusto" },
    ],
  },
  {
    slug: "palkanlaskenta",
    title: "Palkanlaskenta",
    type: "school-exercise",
    period: "December 2024",
    year: 2024,
    summary:
      "A basic C# Windows Forms school exercise that calculates an employee's gross pay, tax and net pay from hours worked and an hourly wage, using a simplified tax-bracket model. Employee data and saved pay results are stored in text files.",
    technologies: ["C#", ".NET", "Windows Forms"],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/Palkanlaskenta" },
    ],
  },
];
