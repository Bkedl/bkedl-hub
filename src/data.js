export const skills = [
  { 
    name: 'JavaScript', 
    description: 'Projects showcasing JavaScript skills',
    projects: ['tradecard', 'task-manager']
  },
  { 
    name: 'Python', 
    description: 'Python projects and workflows',
    projects: ['data-analysis', 'python-BE']
  },
  {
    name: 'SQL',
    description: 'SQL databases and queries',
    projects: ['Database', 'TRADEcard']
  },
  {
    name: 'Power BI',
    description: 'Power BI dashboards and reports',
    projects: ['sales-dashboard', 'marketing-report']
  },
];


export const projects = {
  'tradecard': {
    title: 'Pokemon Trading Website',
    githubUrl: 'https://github.com/bkedl/tradecard',
    overview: 'A node.js and ... app',
    writeup: `
      ## Overview
      loreipsum... Describe using 2k words 
      
      ## Components
      - Type: 
      - Pokemon:
      - Filters: Filter cards by category etc etc

      ## Why React?
      
    `,
  },
  'task-manager': {
    title: 'Task Manager',
    githubUrl: 'https://github.com/bkedl/task-manager',
    overview: 'overview',
    writeup: `Write up here`,
  },
};