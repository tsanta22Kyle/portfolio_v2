export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    role: string;
    stack: string[];
    link?: string;
    github?: string;
    mobileLink?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        id: "unfaked",
        title: "Unfaked",
        description: "DevFest 2025 Vice Champions. Combating misinformation.",
        fullDescription: "A platform dedicated to combating misinformation using AI. Awarded Vice Champions at DevFest 2025 Hackathon. Contributed to the SaaS platform and led the development of the mobile version using React Native and Expo.",
        role: "Frontend & Mobile Developer",
        stack: ["Next.js", "Expo", "React Native", "TailwindCSS"],
        link: "https://un-faked-preprod.vercel.app/",
        github: "https://lnkd.in/eB8jnR5d",
        mobileLink: "https://lnkd.in/eB8jnR5d", // Android App Link
        images: [] // Add screenshots here
    },
    {
        id: "boby",
        title: "Boby",
        description: "Mobile personal finance management application.",
        fullDescription: "A mobile personal finance management application allowing users to track their expenses and optimize their daily budget. The project integrates a complete CI/CD pipeline with quality and security analysis (SAST), ensuring robustness and maintainability.",
        role: "Lead Developer",
        stack: ["React Native", "Expo", "CI/CD", "SAST"],
        images: []
    },
    {
        id: "cabinet-cerim",
        title: "Cabinet Cerim",
        description: "Professional website for a debt collection firm.",
        fullDescription: "Professional website developed for a firm specializing in debt collection. Objective: improve online visibility, strengthen credibility, and facilitate the conversion of prospects into clients.",
        role: "Frontend Developer",
        stack: ["Next.js", "TailwindCSS", "SEO"],
        link: "https://cabinetcerim.com",
        images: []
    },
    {
        id: "caverne-ecom",
        title: "Artisanal E-commerce Platform",
        description: "Platform for selling Malagasy artisanal products internationally.",
        fullDescription: "Platform allowing the sale of Malagasy artisanal products internationally. Integrates a secure payment system with Stripe (webhooks), a modern architecture (Spring Boot + Next.js), and automated deployment with Docker + CI/CD + multi-tool SAST.",
        role: "Fullstack Developer",
        stack: ["Spring Boot", "Next.js", "Stripe", "Docker", "CI/CD"],
        link: "https://caverne-ecom.vercel.app/fr",
        images: []
    },
    {
        id: "vaikaparts",
        title: "Vaikaparts",
        description: "Mobile application for digitizing startup services.",
        fullDescription: "Mobile application developed for a local startup to digitize its services and improve user experience. Project managed end-to-end: design, development, testing, and delivery.",
        role: "Mobile Developer",
        stack: ["React Native", "Expo"],
        images: []
    },
    {
        id: "ony-portfolio",
        title: "Freelance Portfolio",
        description: "Modern portfolio for a community freelance.",
        fullDescription: "Modern portfolio designed for a community freelance to highlight skills and projects. Optimized for performance and SEO with Next.js and Vercel.",
        role: "Frontend Developer",
        stack: ["Next.js", "TailwindCSS", "Vercel"],
        link: "https://ony-ralijaona.vercel.app",
        images: []
    },
    {
        id: "devikapps",
        title: "Devik Apps",
        description: "Showcase website for Devik Apps digital agency.",
        fullDescription: "Showcase website of the digital agency Devik Apps. Allows presenting services, achievements, and attracting potential clients.",
        role: "Frontend Developer",
        stack: ["Next.js", "TailwindCSS"],
        link: "https://devikapps.com",
        images: []
    },
    {
        id: "qivapi",
        title: "Qivapi",
        description: "Simplified Postman ensuring seamless API testing.",
        fullDescription: "A simplified API testing tool similar to Postman, designed to test endpoints and APIs efficiently. Built as a personal fullstack project to master Spring Boot and React integration.",
        role: "Fullstack Developer",
        stack: ["Spring Boot", "React", "PostgreSQL", "Docker"],
        link: "https://qivapi-backend.onrender.com/",
        images: []
    },
    {
        id: "ligne-editoriale",
        title: "Ligne Éditoriale",
        description: "Platform for articles, podcasts, and literary content.",
        fullDescription: "A comprehensive content platform for publishing articles, podcasts, and literary works. Focused on providing a clean, reading-centric user experience.",
        role: "Next.js Developer",
        stack: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://ligne-editoriale-devikapps.vercel.app/",
        images: []
    },
    {
        id: "send-it",
        title: "Send It",
        description: "Real-time instant messaging application.",
        fullDescription: "A real-time messaging application featuring instant delivery, user authentication, and responsive design. Built from scratch to handle full-duplex communication.",
        role: "Fullstack Developer (Front to Back)",
        stack: ["Express", "React", "Socket.io", "MongoDB"],
        link: "https://send-it-7cgx.onrender.com/login",
        images: []
    }
];
