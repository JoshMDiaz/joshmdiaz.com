import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  logo: string
  logoMaxHeight?: string
}

const projects: Project[] = [
  {
    title: 'Pattern Library',
    description:
      'A component library created for Pattern front-end applications. It is heavily used across dozens of devs and applications.',
    technologies: ['React', 'Typescript', 'SCSS', 'Storybook'],
    link: 'https://library.pattern.com',
    logo: 'https://images.pattern.com/pattern_exp_logos/library.svg',
  },
  {
    title: 'Pattern UI',
    description:
      "A new flavor of Pattern's component library. It is going to replace the existing Pattern Library.",
    technologies: ['React', 'Typescript', 'Shadcn', 'Tailwind', 'Storybook'],
    link: 'https://docs.pattern.com/pattern-ui',
    logo: 'https://images.pattern.com/pattern_logo.svg',
  },
  {
    title: 'Lilybug',
    description:
      'A helpful app for new mothers who want help tracking feedings, diaper changes, and nap times. It helps to have one fewer thing to stress about as a mother.',
    technologies: ['React Router', 'Supabase', 'Tailwind', 'Tanstack Query'],
    link: 'https://lilybug.vercel.app/',
    logo: '/Lilybug_light.svg',
    logoMaxHeight: '60px',
  },
  {
    title: 'Budget Buckets',
    description:
      'I vibe coded a simple budget app to help save for different things. I wanted a quick glance of where money was being allocated.',
    technologies: ['Lovable', 'React', 'Tailwind CSS', 'Supabase'],
    link: 'https://bucket-budgets.vercel.app/',
    logo: '/bucket-budgets.svg',
    logoMaxHeight: '60px',
  },
  {
    title: '4RTH',
    description:
      'A fully responsive score keeping application for 4RTH. It is a mixer format that allows you to play with all other players.',
    technologies: ['Remix', 'Typescript', 'SCSS'],
    link: 'https://4rth.joshmdiaz.com/',
    logo: '/4rth.svg',
  },
  {
    title: 'Budgety',
    description:
      'A simple budgeting application for children. It allows kids to visualize their spending and saving habits.',
    technologies: ['Next.js', 'Shadcn', 'Tailwind CSS'],
    link: 'https://budgety.joshmdiaz.com/',
    logo: '/budgety.svg',
  },
]

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-6 py-28 md:py-36" id="work">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full overflow-hidden bg-card/40 border-border/60 hover:border-border transition-colors group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="w-full flex items-center justify-center pt-8 pb-5 px-8">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-full object-contain brightness-0 invert"
                      style={{
                        filter: 'brightness(0) invert(1)',
                        maxHeight: project.logoMaxHeight || '40px',
                      }}
                    />
                  </div>

                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
