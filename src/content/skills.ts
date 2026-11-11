import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Framer Motion', 'SAP UI5'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', 'C# / .NET Framework', 'Python', 'Django', 'Django REST Framework', 'FastAPI', 'APIs REST', 'JWT', 'Swagger'],
  },
  {
    title: 'SAP Business One',
    items: [
      'Service Layer (OData)',
      'DI API',
      'UI API',
      'Add-ons em C#',
      'UDTs, UDFs e UDOs',
      'SBO_SP_TransactionNotification',
      'Lançamentos contábeis e pagamentos',
      'Crystal Reports',
    ],
  },
  {
    title: 'Dados & Infra',
    items: ['SAP HANA', 'SQL Server', 'Stored procedures', 'PostgreSQL', 'SQLite', 'Prisma', 'TypeORM', 'Drizzle ORM', 'Serviços Windows', 'Vercel', 'Git'],
  },
  {
    title: 'Automação & IA',
    items: ['Python para automação industrial', 'Comunicação máquina-computador', 'Jobs agendados de integração', 'Google Gemini', 'Playwright'],
  },
]
