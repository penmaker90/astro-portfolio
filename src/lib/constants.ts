import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/aditya-mishra-986593181',
  mail: 'mailto:mindreadermishraji@gmail.com',
  instagram: 'https://www.instagram.com/adi.tya123459127?utm_source=qr&igsh=NWUxengxajMwOTA2',
  
  
}

// Global
export const SITE: Site = {
  TITLE: 'Aditya Mishra - Business Enthusiast',
  DESCRIPTION: 'Welcome to the portfolio and blog of Aditya Mishra. Passionate about business, innovation, and creating impactful solutions.',
  AUTHOR: 'Aditya Mishra',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
   company: 'NexGen Engineering Solutions',
location: 'Delhi, India',
position: 'Project Mechanical Engineer',
start: '2021',
end: 'Current',
link: 'https://nexgeneng.com/',
tasks: [
'Managed full lifecycle product development from concept design to final commissioning',
'Performed data analysis and interpreted test results to improve product designs',
'Coordinated with cross-functional teams to meet project deadlines and budgets',
'Led troubleshooting and maintenance initiatives to resolve mechanical system issues',
],


  },
  {
    company: 'DesignWave Tech',
location: 'New Delhi, India',
position: 'Mechanical Design Engineer',
start: '2020',
end: '2023',
link: 'https://designwave.in/',
tasks: [
'Created detailed design plans and 3D CAD models for mechanical products',
'Used simulation tools for testing mechanical system performance',
'Ensured project compliance with safety and quality standards',
'Provided technical advice and supported manufacturing teams during product assembly',
],
  },
  {
    company: 'Starico Private Limited',
location: 'New Delhi, India',
position: 'Mechanical Engineer',
start: '2018',
end: '2021',
link: 'https://staricopvtltd.com/',
tasks: [
'Designed and developed mechanical components and systems using CAD software',
'Conducted testing and evaluation of prototypes to ensure safety and reliability',
'Collaborated with manufacturing teams to optimize production processes',
'Prepared technical documentation and reports for project stakeholders',
],
  },
  
  
 
]
