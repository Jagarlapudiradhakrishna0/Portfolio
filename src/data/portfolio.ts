// Portfolio Data — Source of Truth
// All information derived from actual workspace files

export const personal = {
  name: 'Jagarlapudi Radha Krishna',
  firstName: 'Jagarlapudi',
  lastName: 'Radha Krishna',
  title: 'Full Stack Developer & AI/ML Engineer',
  shortTitle: 'Full Stack Developer',
  tagline: 'Building real-world, problem-driven digital solutions.',
  bio: `I'm a passionate Full Stack Developer and AI/ML Engineer focused on building real-world, problem-driven solutions. I work across modern web applications, intelligent systems, and scalable platforms, with projects ranging from a comprehensive Lost & Found platform to RYDO, a ride-sharing coordination solution currently under development.`,
  email: 'radhakrishnajagarlapudi@gmail.com',
  github: 'https://github.com/jagarlapudiradhakrishna0',
  linkedin: 'https://www.linkedin.com/in/jagarlapudiradhakrishna/',
  resume: '/Portfolio/Jagarlapudi_Radha_Krishna_Resume.pdf',
  photo: '/Portfolio/profile.png',
  location: 'India',
};

export const skills = [
  // Programming
  { name: 'Python', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },

  // Web
  { name: 'React', category: 'Web' },
  { name: 'HTML5', category: 'Web' },
  { name: 'CSS3', category: 'Web' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },

  // Database
  { name: 'MongoDB', category: 'Database' },

  // Cloud & Tools
  { name: 'AWS Cloud', category: 'Cloud & Tools' },
  { name: 'Git & GitHub', category: 'Cloud & Tools' },
  { name: 'Linux/Unix', category: 'Cloud & Tools' },
  { name: 'GitHub Copilot', category: 'Cloud & Tools' },

  // AI/ML
  { name: 'Machine Learning', category: 'AI / ML' },
  { name: 'Deep Learning', category: 'AI / ML' },
  { name: 'Computer Vision', category: 'AI / ML' },
  { name: 'NLP', category: 'AI / ML' },
  { name: 'Robotics Process Automation', category: 'AI / ML' },
];

export const skillCategories = [
  'Programming',
  'Web',
  'Backend',
  'Database',
  'Cloud & Tools',
  'AI / ML',
];

export const experience = [
  {
    id: 1,
    role: 'AI/ML Virtual Intern',
    organization: 'Virtual Internship Program',
    period: '2024',
    description:
      'Completed AI/ML virtual internship gaining hands-on experience in machine learning algorithms, model training, and intelligent application development.',
    certificate: '/Portfolio/certificates/internships/AIML Virtual Internship.pdf',
    type: 'internship',
  },
  {
    id: 2,
    role: 'Android Developer Virtual Intern',
    organization: 'Virtual Internship Program',
    period: '2024',
    description:
      'Developed Android applications during virtual internship, gaining experience in mobile UI design, app architecture, and Android SDK.',
    certificate: '/Portfolio/certificates/internships/Android Developer Virtual Internship.pdf',
    type: 'internship',
  },
  {
    id: 3,
    role: 'Python Full Stack Development Intern',
    organization: 'Virtual Internship Program',
    period: '2024',
    description:
      'Built full stack web applications using Python, Django/Flask for backend and modern frontend technologies, covering database integration and deployment.',
    certificate: '/Portfolio/certificates/internships/Python Full Stack Development intership.pdf',
    type: 'internship',
  },
  {
    id: 4,
    role: 'Employability Skills Virtual Intern',
    organization: 'Virtual Internship Program',
    period: '2024',
    description:
      'Completed job-readiness and employability skills program covering professional communication, teamwork, problem solving, and workplace best practices.',
    certificate: '/Portfolio/certificates/internships/Employability Skill Job Ready Virtual Internship.pdf',
    type: 'internship',
  },
];

export interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github: string | null;
  demo: string | null;
  status: 'FEATURED' | 'IN DEVELOPMENT' | 'COMPLETED';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Lost & Found',
    subtitle: 'Comprehensive Community Item Recovery System',
    description:
      'A full-stack, problem-solving platform engineered to report, search, track, and recover lost belongings across community spaces. Features structured multi-category filtering, verified item status reports, real-time alert mechanisms, and secure user dashboards.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API'],
    image: '/Portfolio/project3.png',
    github: 'https://github.com/Jagarlapudiradhakrishna0/project_lost_and_found',
    demo: 'https://lostandfound-1vzs.onrender.com/',
    status: 'FEATURED',
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'RYDO',
    subtitle: 'Ride & Group Coordination Platform',
    description:
      'A real-time ride and group coordination platform where the trip creator acts as the Captain and other users securely join as Riders using unique group passcodes. Engineered for seamless transit coordination and collaborative group travel.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'WebSockets', 'JavaScript'],
    image: '/Portfolio/rydo.png',
    github: 'https://github.com/Jagarlapudiradhakrishna0/RYDO',
    demo: null,
    status: 'IN DEVELOPMENT',
    featured: true,
  },
  {
    id: 3,
    number: '03',
    title: 'Mia AI Assistant',
    subtitle: 'GlobalX — Conversational AI Web App',
    description:
      'Mia AI Assistant is an intelligent voice assistant web application built for GlobalX. Users can talk to Mia in real-time via browser-based speech recognition, creating an interactive, voice-driven AI communication interface.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web Speech API', 'AI/ML'],
    image: '/Portfolio/project1.png',
    github: 'https://github.com/Jagarlapudiradhakrishna0/MiaAi',
    demo: 'https://immiaassistant.netlify.app/',
    status: 'COMPLETED',
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Luxe Store',
    subtitle: 'High-Performance E-Commerce Experience',
    description:
      'Luxe Store is a modern e-commerce platform built with a high-contrast dark aesthetic. Showcases catalog management, responsive product filtering, dynamic cart workflows, and interactive styling tailored for web consumers.',
    tech: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    image: '/Portfolio/project2.png',
    github: 'https://github.com/Jagarlapudiradhakrishna0/LUXE',
    demo: 'https://luxein.netlify.app/',
    status: 'COMPLETED',
    featured: false,
  },
];

export interface Certificate {
  id: string;
  title: string;
  shortTitle: string;
  issuer: string;
  file: string;
  category: 'internship' | 'course';
}

export const certificates: Certificate[] = [
  // Internship Certificates
  {
    id: 'aiml-intern',
    title: 'AI/ML Virtual Internship',
    shortTitle: 'AI/ML Internship',
    issuer: 'Virtual Internship Program',
    file: '/Portfolio/certificates/internships/AIML Virtual Internship.pdf',
    category: 'internship',
  },
  {
    id: 'android-intern',
    title: 'Android Developer Virtual Internship',
    shortTitle: 'Android Developer Intern',
    issuer: 'Virtual Internship Program',
    file: '/Portfolio/certificates/internships/Android Developer Virtual Internship.pdf',
    category: 'internship',
  },
  {
    id: 'python-intern',
    title: 'Python Full Stack Development Internship',
    shortTitle: 'Python Full Stack Intern',
    issuer: 'Virtual Internship Program',
    file: '/Portfolio/certificates/internships/Python Full Stack Development intership.pdf',
    category: 'internship',
  },
  {
    id: 'employ-intern',
    title: 'Employability Skills Job Ready Internship',
    shortTitle: 'Job Readiness Internship',
    issuer: 'Virtual Internship Program',
    file: '/Portfolio/certificates/internships/Employability Skill Job Ready Virtual Internship.pdf',
    category: 'internship',
  },

  // Course Certificates
  {
    id: 'aws-foundations',
    title: 'AWS Cloud Foundations',
    shortTitle: 'AWS Cloud Foundations',
    issuer: 'AWS Academy',
    file: '/Portfolio/certificates/courses/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251103-30-gr56p2.pdf',
    category: 'course',
  },
  {
    id: 'aws-security',
    title: 'AWS Cloud Security Builder',
    shortTitle: 'AWS Cloud Security',
    issuer: 'AWS Academy',
    file: '/Portfolio/certificates/courses/AWS_Academy_Graduate___Cloud_Security_Builder___Training_Badge_Badge20251118-33-4yggji.pdf',
    category: 'course',
  },
  {
    id: 'aws-webapp',
    title: 'AWS Cloud Web Application Builder',
    shortTitle: 'AWS Cloud Web App Builder',
    issuer: 'AWS Academy',
    file: '/Portfolio/certificates/courses/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251118-33-z0u7iv.pdf',
    category: 'course',
  },
  {
    id: 'linux',
    title: 'Complete UNIX & Linux OS Fundamentals',
    shortTitle: 'Linux OS Fundamentals',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Complete UNIX & Linux OS Fundamentals Training.pdf',
    category: 'course',
  },
  {
    id: 'cv101',
    title: 'Computer Vision 101',
    shortTitle: 'Computer Vision 101',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Computer Vision 101.pdf',
    category: 'course',
  },
  {
    id: 'dl-dev',
    title: 'Deep Learning for Developers',
    shortTitle: 'Deep Learning for Devs',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Deep Learning for Developers.pdf',
    category: 'course',
  },
  {
    id: 'gh-copilot',
    title: 'GitHub Copilot for Developers',
    shortTitle: 'GitHub Copilot',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/GitHub Copilot for developers.pdf',
    category: 'course',
  },
  {
    id: 'intro-ai',
    title: 'Introduction to Artificial Intelligence',
    shortTitle: 'Intro to AI',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Introduction to Artificial Intelligence.pdf',
    category: 'course',
  },
  {
    id: 'intro-dl',
    title: 'Introduction to Deep Learning',
    shortTitle: 'Intro to Deep Learning',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Introduction to Deep Learning.pdf',
    category: 'course',
  },
  {
    id: 'intro-html5',
    title: 'Introduction to HTML5',
    shortTitle: 'HTML5 Fundamentals',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Introduction to HTML5.pdf',
    category: 'course',
  },
  {
    id: 'intro-it-aws',
    title: 'Introduction to Information Technology & AWS Cloud',
    shortTitle: 'IT & AWS Cloud Intro',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Introduction to Information Technology and AWS Cloud.pdf',
    category: 'course',
  },
  {
    id: 'intro-nlp',
    title: 'Introduction to Natural Language Processing',
    shortTitle: 'Intro to NLP',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Introduction to Natural Language Processing.pdf',
    category: 'course',
  },
  {
    id: 'intro-rpa',
    title: 'Introduction to Robotic Process Automation',
    shortTitle: 'Intro to RPA',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Introduction to Robotic Process Automation.pdf',
    category: 'course',
  },
  {
    id: 'matrix-algebra',
    title: 'Matrix Algebra for Engineers',
    shortTitle: 'Matrix Algebra',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Matrix Algebra for Engineers.pdf',
    category: 'course',
  },
  {
    id: 'oop-java',
    title: 'Object Oriented Programming in Java',
    shortTitle: 'OOP in Java',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Object Oriented Programming in Java.pdf',
    category: 'course',
  },
  {
    id: 'prob-stats',
    title: 'Probability and Statistics using Python',
    shortTitle: 'Probability & Statistics',
    issuer: 'Training Program',
    file: '/Portfolio/certificates/courses/Probability and Statistics using Python.pdf',
    category: 'course',
  },
  {
    id: 'cc-cert',
    title: 'CC Certificate',
    shortTitle: 'CC Certificate',
    issuer: 'Program',
    file: '/Portfolio/certificates/courses/project_CC_certificate_2055.pdf',
    category: 'course',
  },
];
