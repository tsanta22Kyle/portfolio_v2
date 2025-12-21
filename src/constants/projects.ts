
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
