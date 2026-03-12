import React from 'react'

type SkillCategory = {
  label: string
  icon: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    label: 'Frontend',
    icon: 'bxl-react',
    skills: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Flutter & Dart', 'Tailwind CSS', 'shadcn/ui', 'GSAP', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    label: 'State Management',
    icon: 'bx-transfer',
    skills: ['Zustand', 'TanStack Query', 'Redux Toolkit', 'Redux-Saga', 'BLoC', 'Riverpod', 'Context API'],
  },
  {
    label: 'Backend & Support',
    icon: 'bx-server',
    skills: ['Node.js', 'Nest.js', 'Bun', 'HonoJS', 'PostgreSQL', 'Redis', 'Drizzle ORM', 'Prisma', 'Supabase'],
  },
  {
    label: 'Web3',
    icon: 'bx-cube',
    skills: ['Viem', 'Wagmi', 'RainbowKit', 'Ethers.js', 'Web3dart', 'Hyperliquid SDK', 'Smart Contracts'],
  },
  {
    label: 'DevOps & Tools',
    icon: 'bxl-docker',
    skills: ['Docker', 'GitHub Actions', 'Nginx', 'Caddy', 'AWS', 'Vercel', 'Inngest', 'Puppeteer'],
  },
  {
    label: 'Architecture',
    icon: 'bx-sitemap',
    skills: ['Turborepo (Monorepo)', 'pnpm workspaces', 'Schema-driven UI', 'Event-driven Jobs'],
  },
]

const Skills = () => {
  return (
    <div className="rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full p-6">
      <p className='text-black dark:text-white text-xl text-left font-bold mb-4'>Skills</p>
      <div className='w-full h-[calc(100%_-_48px)] overflow-y-auto scrollbar pr-1'>
        <div className='flex flex-col gap-4'>
          {categories.map((cat) => (
            <div key={cat.label} className="skill-cat-card rounded-2xl p-4">
              {/* Category header */}
              <div className='flex items-center gap-3 mb-3'>
                <span className="skill-cat-icon w-9 h-9 rounded-xl">
                  <i className={`bx ${cat.icon} text-lg`} style={{ color: 'var(--color)' }}></i>
                </span>
                <span className='text-black dark:text-white font-bold text-sm uppercase tracking-widest'>{cat.label}</span>
              </div>
              {/* Skill chips */}
              <div className='flex flex-wrap gap-2'>
                {cat.skills.map((skill) => (
                  <span key={skill} className='skill-chip text-xs font-medium text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-xl'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
