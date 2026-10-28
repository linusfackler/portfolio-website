import luraLogo from '../assets/lura.svg'
import cometSquareLogo from '../assets/cometsquare.svg'
import studiaLogo from '../assets/studia.svg'

export const profile = {
  name: 'Linus Fackler',
  role: 'Software Engineer',
  introduction:
    'I build full-stack applications, AI-powered tools and data-driven solutions that solve real-world problems.',
  location: 'Houston, Texas',
  email: 'linus.fackler@icloud.com',
  linkedIn: 'https://www.linkedin.com/in/linusfackler/',
  github: 'https://github.com/linusfackler',
}

export const stats = [
  { value: '5+', label: 'Years in Consulting' },
  { value: '2', label: 'Enterprise Clients' },
  { value: '3', label: 'Cloud Platforms' },
]

export const specialties = [
  {
    title: 'AI & Machine Learning',
    description: 'AI workflows, machine learning & RAG',
    icon: 'brain',
    color: 'peach',
  },
  {
    title: 'Data & Cloud',
    description: 'Data pipelines & Azure, AWS, GCP cloud services',
    icon: 'database',
    color: 'blue',
  },
  {
    title: 'Full-Stack Development',
    description: 'Web applications, APIs & integrations',
    icon: 'code',
    color: 'green',
  },
] as const

export const experiences = [
  {
    company: 'Crash Champions',
    role: 'AI / Machine Learning Engineer',
    date: '2025 — 2026',
    technologies: ['Python', 'Azure', 'AI/ML'],
  },
  {
    company: 'Nasdaq Solovis',
    role: 'Full-Stack Software Engineer',
    date: '2024 — 2026',
    technologies: ['C#', '.NET', 'JavaScript', 'APIs'],
  },
  {
    company: 'Studia AI',
    role: 'Co-Founder',
    date: '2023 — 2025',
    technologies: ['Swift', 'iOS mobile development', 'Python', 'JavaScript'],
  },
  {
    company: 'Fackler IT',
    role: 'Consultant',
    date: '2020 — 2023',
    technologies: ['Infrastructure', 'Web', 'Databases'],
  },
]

export const projects = [
  {
    id: 'insurance-ai',
    title: 'Insurance AI Prediction System',
    category: 'AI / Machine Learning',
    description:
      'Developed AI-powered workflows to predict insurance change requests using historical insurance and repair data.',
    details: [
      'Built multi-agent AI workflows and retrieval-augmented generation (RAG) pipelines.',
      'Developed data processing and model integration workflows using Python, Azure, and Microsoft Fabric.',
    ],
    technologies: ['Python', 'Azure', 'Microsoft Fabric', 'RAG', 'Agentic AI'],
    icon: 'brain',
    image: null,
    theme: 'ai',
    type: 'professional',
    links: {},
  },
  {
    id: 'investment-platform',
    title: 'Enterprise Investment Platform',
    category: 'Full-Stack Development',
    description:
      'Developed and maintained enterprise applications for investment portfolio management at Nasdaq Solovis.',
    details: [
      'Implemented frontend features and integrated backend services through REST APIs.',
      'Contributed to application modernization, production troubleshooting, and technical debt reduction.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'REST APIs', '.NET'],
    icon: 'finance',
    image: null,
    theme: 'finance',
    type: 'professional',
    links: {},
  },
  {
    id: 'cloud-data-pipelines',
    title: 'Cloud Data Pipelines',
    category: 'Data Engineering',
    description:
      'Built cloud-based data processing pipelines supporting machine learning and enterprise analytics.',
    details: [
      'Designed ingestion and transformation workflows using Microsoft Fabric lakehouses, pipelines, and Eventstreams.',
      'Integrated processing workflows with Azure Functions and implemented production monitoring.',
    ],
    technologies: ['Python', 'Microsoft Fabric', 'Azure Functions', 'SQL', 'ETL'],
    icon: 'database',
    image: null,
    theme: 'data',
    type: 'professional',
    links: {},
  },
  {
    id: 'studia',
    title: 'Studia',
    category: 'iOS / Artificial Intelligence',
    description:
      'An AI-powered study application that transforms scanned textbooks into personalized lectures for students.',
    details: [
      'Developed an iOS application using Swift.',
      'Integrated a custom-trained AI model to generate personalized educational lectures from scanned textbook content.',
    ],
    technologies: ['Swift', 'iOS', 'Machine Learning', 'AI'],
    icon: null,
    image: studiaLogo,
    theme: 'studia',
    type: 'personal',
    links: {},
  },
  {
    id: 'lura',
    title: 'Lura',
    category: 'TAMUhack 2023',
    description:
      'A full-stack iOS application designed to help users assess potential COVID-19 symptoms using AI and machine learning.',
    details: [
      'Developed an iOS application integrating machine learning capabilities.',
      'Used convolutional neural networks (CNNs) for cough-based classification.',
    ],
    technologies: ['Swift', 'Python', 'Node.js', 'Firebase', 'AWS', 'CNN'],
    icon: null,
    image: luraLogo,
    theme: 'lura',
    type: 'hackathon',
    links: {},
  },
  {
    id: 'cometsquare',
    title: 'CometSquare',
    category: 'HackUTD IX',
    description:
      'A campus-focused application designed to help university students discover clubs and organizations.',
    details: [
      'Developed a full-stack application for discovering student organizations.',
      'Integrated a machine-learning-based search algorithm using BERT to identify relationships between text queries.',
    ],
    technologies: ['C#', 'Python', 'MongoDB', 'Unity', 'PyTorch', 'BERT'],
    icon: null,
    image: cometSquareLogo,
    theme: 'cometsquare',
    type: 'hackathon',
    links: {},
  },
] as const
