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
