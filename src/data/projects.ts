import type { Project } from "@/types/project";

// Facts come from the Obsidian project notes (PORTFOLIO/Projects), 07 Project Inventory
// and this repository. Leave fields out rather than guessing; missing content is
// tracked in Obsidian (15 Implementation Status), not here.
export const projects: Project[] = [
  {
    slug: "mpk-consulting",
    title: "MPK Consulting",
    type: "client",
    period: "Winter 2025/2026",
    role: "Student developer",
    featured: true,
    summary:
      "Multi-page company website for MPK Consulting Oy, presenting the company's services, project references and expertise.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    highlights: [
      "Next.js App Router site with typed content separated from presentation",
      "Contact form built with a Server Action and Resend, with the API key kept out of source code",
      "SEO metadata, structured data and responsive, accessible layouts",
      "Deployed on Vercel with GitHub integration, preview deployments and a custom domain",
    ],
    links: [{ label: "Live site", href: "https://mpk-consulting.net/" }],
    caseStudy: {
      overview:
        "A company website for MPK Consulting Oy. The goal was to present the company's services, project references and expertise through a multi-page website with Home, About, Services, Projects, Contact and 404 pages.",
      built: [
        "Next.js App Router multi-page site",
        "Typed content and data structures",
        "Reusable React components",
        "Responsive navigation",
        "Services and project reference sections",
        "Contact form using a Server Action and Resend",
        "SEO metadata and structured data",
        "Semantic HTML and accessibility considerations",
        "Responsive layouts",
        "Vercel deployment with GitHub integration, preview deployments and a custom domain",
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
      challenges: [
        { problem: "Tailwind CSS v4 configuration" },
        { problem: "Hover and CTA styling" },
        { problem: "Mobile navigation and navigation behavior" },
        { problem: "TypeScript build errors" },
        { problem: "React hooks" },
      ],
      learned: [
        "Next.js App Router",
        "React component architecture",
        "TypeScript",
        "Tailwind CSS v4",
        "Server Actions",
        "Typed content and data structures",
        "SEO and structured data",
        "Accessibility",
        "Environment variables",
        "Vercel and production deployment",
        "GitHub-based deployment workflows",
      ],
      demonstrates: [
        "Modern Next.js and React development",
        "TypeScript",
        "Responsive frontend development",
        "Component architecture",
        "Service integration",
        "SEO",
        "Accessibility",
        "Production deployment",
        "Real client project experience",
      ],
    },
  },
  {
    slug: "pielaveden-keilahalli",
    title: "Pielaveden Keilahalli",
    type: "client",
    period: "Spring 2026",
    role: "Design and implementation",
    featured: true,
    summary:
      "Responsive WordPress website for Pielaveden Keilahalli, built for clear UI, maintainability and content the client can manage without programming.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "ACF"],
    highlights: [
      "Astra child theme with a custom header rendered through WordPress hooks",
      "Competitions as a custom post type with ACF fields, rendered dynamically with WP_Query, automated archive system",
      "Client-managed content, user roles and client documentation",
      "Published on a domain and hosting service, including SMTP email configuration",
    ],
    links: [{ label: "Live site", href: "https://pielavedenkeilahalli.fi/" }],
    caseStudy: {
      overview:
        "A modern, responsive WordPress website for a real client, focusing on clear UI, maintainability and practical content management. The site covers the home page, competitions and a competition archive, competition sign-up, the club, membership applications, contact details with Google Maps, opening hours, activities and restaurant menu content.",
      built: [
        "Astra child theme with a custom PHP header rendered through WordPress hooks, replacing the default Astra header",
        "Custom navigation with dropdowns, a mobile hamburger menu and a sticky header",
        "A \"Varaa rata\" call to action",
        "Custom CSS, hover states and Google Fonts (Manrope and Inter)",
        "Competition cards generated dynamically with PHP and WP_Query, with poster, status, name, description and one or two client-configured links",
        "Responsive card layout with hover interaction, poster zoom, a \"show more\" overlay and a lightbox",
        "Content management that lets the client add, edit and publish competitions without programming",
      ],
      database: [
        "Competitions modelled as the custom post type \"kilpailu\"",
        "ACF fields for poster, status, name, short description, button text and URL, and an optional second button",
        "Database management with phpMyAdmin",
      ],
      security: [
        "User roles and permissions for client-managed content",
        "WordPress security considerations",
      ],
      deployment: [
        "Published to a domain and hosting provider",
        "Domain email accounts and SMTP email configuration",
        "Hosting management with cPanel and phpMyAdmin",
      ],
      learned: [
        "WordPress development",
        "Child themes",
        "PHP and WordPress hooks",
        "Custom post types",
        "ACF",
        "Dynamic WordPress content",
        "User roles and permissions",
        "Responsive design",
        "SEO",
        "Image optimization",
        "Security",
        "SMTP and email configuration",
        "Domain and hosting",
        "Database management",
        "phpMyAdmin and cPanel",
        "Accessibility",
        "Client documentation",
        "Troubleshooting",
      ],
      demonstrates: [
        "Real client work",
        "WordPress and PHP development",
        "Custom WordPress functionality",
        "CMS and content management",
        "Dynamic content",
        "Responsive frontend development",
        "Maintainability",
        "Deployment and hosting",
        "SEO",
        "Accessibility",
      ],
    },
  },
  {
    slug: "teo",
    title: "TEO: Work-Based Learning Management",
    type: "school",
    period: "2026",
    role: "Planning and implementation",
    featured: true,
    summary:
      "Final assignment: a system for managing work-based learning periods, students, workplaces and workplace supervisors, intentionally limited to essential functionality.",
    technologies: ["PHP", "JavaScript", "MariaDB", "SQL", "PDO"],
    highlights: [
      "Relational data model and ER diagram with primary and foreign keys",
      "PHP and PDO for server-side logic and database access",
      "Object-oriented JavaScript using fetch to talk to a REST-type PHP API",
      "CRUD operations from the frontend through the API to the database",
    ],
    links: [],
    caseStudy: {
      overview:
        "A school final assignment in which I designed and implemented a system for managing work-based learning periods. The intended system manages students, workplaces, workplace supervisors, work-based learning periods, demonstrations, assessments and student progress. As a school project it was intentionally limited to essential functionality and understanding the system structure, and it was designed around the information and needs involved in managing work-based learning.",
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
      learned: [
        "How a database-driven web application is designed and built as a complete system, from the frontend through JavaScript and the PHP API to the database",
        "Why the database structure should be designed before implementation: a clear data model makes SQL queries and application development easier to manage",
        "Database design, ER modelling and SQL",
        "PHP server-side programming with PDO",
        "JavaScript OOP and frontend/backend integration",
        "Git, GitHub and project documentation",
      ],
      demonstrates: [
        "Requirements analysis",
        "Data modelling and ER diagrams",
        "Relational database design",
        "SQL",
        "PHP database access with PDO",
        "JavaScript frontend logic and OOP",
        "Frontend/backend integration",
        "CRUD functionality",
        "Git, GitHub and documentation",
      ],
      result:
        "An exercise in designing a complete application rather than only the UI, combining database structure, backend logic and frontend. It strengthened my interest in application development, APIs and backend programming.",
    },
  },
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    type: "personal",
    period: "2026",
    status: "In development",
    featured: true,
    summary:
      "A personal developer portfolio built with Next.js, TypeScript and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Docker"],
    highlights: [
      "Typed project data separated from presentation",
      "Design tokens defined as CSS variables and used through Tailwind",
      "Docker-based development environment",
      "Issue-driven workflow with feature branches and pull requests on GitHub",
    ],
    links: [
      { label: "Source code", href: "https://github.com/santtu-kumpulainen/portfolio" },
    ],
    caseStudy: {
      built: [
        "Design tokens for colors, typography, spacing, radii and motion as CSS variables mapped to Tailwind",
        "Responsive header with an accessible mobile navigation",
        "Typed project data with optional case study content",
        "Docker development environment with named volumes for dependencies and build cache",
        "GitHub Issues, feature branches and pull requests for each change",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
