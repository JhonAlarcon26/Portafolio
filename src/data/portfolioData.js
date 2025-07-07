export const personalInfo = {
  name: "Jhon Michael Alarcon Alaro",
  title: "Desarrollador Web",
  tagline: "Creo sitios web modernos y funcionales que transforman ideas en experiencias digitales",
  email: "jhongaloes@gmail.com",
  phone: "+591 7562 9487",
  location: "Santa Cruz, Bolivia",
  about: "Soy un desarrollador web apasionado con experiencia creando aplicaciones web modernas y eficientes. Me especializo en el desarrollo web con tecnologías como PHP, JavaScript, Html, Css , MySQL y Api Testing. Mi objetivo es crear soluciones digitales que no solo cumplan con los requisitos técnicos, sino que también proporcionen una excelente experiencia de usuario.",
  cv: `${import.meta.env.BASE_URL}documents/jhon-michael-cv.pdf`
};

export const skills = {
  frontend: [
    { name: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css3" },
    { name: "JavaScript", level: 85, icon: "javascript" },
    //{ name: "React.js", level: 80, icon: "react" },
    { name: "Bootstrap", level: 90, icon: "bootstrap" },
    { name: "Tailwind CSS", level: 85, icon: "tailwind" }
  ],
  backend: [
    { name: "PHP", level: 90, icon: "php" },
    { name: "MySQL", level: 85, icon: "mysql" },
    //{ name: "Node.js", level: 75, icon: "nodejs" },
    //{ name: "Express.js", level: 70, icon: "express" },
    //{ name: "MongoDB", level: 65, icon: "mongodb" }
  ],
  tools: [
    { name: "Git", level: 85, icon: "git" },
    { name: "GitHub", level: 90, icon: "github" },
    { name: "VS Code", level: 95, icon: "vscode" },
    { name: "Postman", level: 80, icon: "postman" },
    //{ name: "NPM", level: 85, icon: "npm" }
  ],
  others: [
    { name: "Responsive Design", level: 90, icon: "responsive" },
    { name: "API REST", level: 85, icon: "api" },
    { name: "SEO Básico", level: 85, icon: "seo" },
    { name: "Api Testing", level: 80, icon: "testing" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Especial Obituary",
    description: "Desarrollé módulos web personalizados para la plataforma de El Deber usando PHP y APIs REST. Realicé pruebas con Postman y mejoré la experiencia móvil mediante diseño responsive.",
    image: `${import.meta.env.BASE_URL}images/12.png`,
    technologies: ["PHP", "html", "css", "JavaScript", "Bootstrap", " Api Rest"],
    github: "https://github.com/JhonAlarcon26/Obituary.git",
    live: "https://enelrecuerdo.eldeber.com.bo/",
    category: "fullstack"
  },
  /*{
    id: 2,
    title: "Task Management App",
    description: "Aplicación web para gestión de tareas con funcionalidades de drag & drop, filtros y notificaciones en tiempo real.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/carlosrodriguez/task-manager",
    live: "https://task-manager-demo.com",
    category: "frontend"
  },
  {
    id: 3,
    title: "API REST para Blog",
    description: "API completa para sistema de blog con autenticación JWT, CRUD operations y documentación con Swagger.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["PHP", "MySQL", "JWT", "Swagger", "Postman"],
    github: "https://github.com/carlosrodriguez/blog-api",
    live: "https://blog-api-demo.com",
    category: "backend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Sitio web personal responsive con animaciones modernas y optimizado para SEO.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
    github: "https://github.com/carlosrodriguez/portfolio",
    live: "https://carlosrodriguez.dev",
    category: "frontend"
  },
  {
    id: 5,
    title: "CRM System",
    description: "Sistema de gestión de relaciones con clientes con dashboard interactivo y reportes avanzados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["PHP", "MySQL", "JavaScript", "Chart.js", "Bootstrap"],
    github: "https://github.com/carlosrodriguez/crm-system",
    live: "https://crm-demo.com",
    category: "fullstack"
  },
  {
    id: 6,
    title: "Weather App",
    description: "Aplicación del clima con geolocalización, pronósticos de 7 días y diseño responsive.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Geolocation"],
    github: "https://github.com/carlosrodriguez/weather-app",
    live: "https://weather-app-demo.com",
    category: "frontend"
  }*/
];

export const socialLinks = {
  github: "https://github.com/JhonAlarcon26",
  linkedin: "https://www.linkedin.com/in/jhon-alarcon",
  twitter: "https://x.com/JhonAlaro26?t=8v2dlw80Wt8lcu-je7yBDw&s=09",
  whatsapp: "https://wa.link/1e3k8m"
};

export const experience = [
  {
    title: "Desarrollador Web Freelance ",
    company: "EL DEBER",
    period: "Febrero 2025 – Abril 2025",
    description: "Diseñé y desarrollé sitios web personalizados enfocados en negocios locales, implementando funcionalidades backend en PHP como paneles administrativos y formularios de contacto. Me enfoqué en la optimización del rendimiento y la compatibilidad móvil, manteniendo una comunicación directa con los clientes para ofrecer soluciones a medida."
  },
  /*{
    title: "Desarrollador Frontend",
    company: "Digital Agency XYZ",
    period: "2021 - 2022",
    description: "Creación de interfaces de usuario modernas con React y Tailwind CSS. Optimización de rendimiento y SEO."
  },
  {
    title: "Desarrollador PHP Junior",
    company: "Startup Innovadora",
    period: "2020 - 2021",
    description: "Desarrollo de APIs REST y sistemas de gestión de contenido con PHP y MySQL."
  }*/
];

export const education = [
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Aquino De Bolivia",
    period: "Marzo 2022 - Actualidad",
    description: "Especialización en desarrollo de software y tecnologías web."
  },
  {
    degree: "Desarrollo Web",
    institution: "Infocal",
    period: "Marzo 2025 - Septiembre 2025",
    description: "Curso completo de desarrollo web moderno con PHP, JavaScript, Html, Css, Bootstrap, Api Rest, Api Testing, SEO, Git, GitHub, VS Code, Postman y MySQL."
  }
];

export const testimonials = [
  {
    name: "Miguel Valdez",
    position: "Product Manager Digital",
    content: "Jhon demostró excelentes habilidades técnicas durante su trabajo en el proyecto Especial Obituary. Su conocimiento en PHP y APIs REST fue fundamental para el éxito del proyecto.",
    avatar: `${import.meta.env.BASE_URL}images/15.png`
  },
  /*{
    name: "Profesor Infocal",
    position: "Instructor de Desarrollo Web",
    content: "Jhon es un estudiante muy dedicado y talentoso. Su capacidad para aprender rápidamente y aplicar conocimientos en proyectos reales es excepcional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Cliente Freelance",
    position: "Emprendedor Local",
    content: "Trabajar con Jhon fue una experiencia muy profesional. Entendió perfectamente mis necesidades y entregó un sitio web que superó mis expectativas.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }*/
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Basico" },
  //{ name: "Francés", level: "Intermedio" }
]; 