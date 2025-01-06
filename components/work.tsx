'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Pattern Library',
    description:
      'A component library created for Pattern front-end applications. It is heavily used across dozens of devs and applications.',
    technologies: ['React', 'Typescript', 'SCSS', 'Storybook'],
    link: 'https://library.pattern.com',
    logo: 'https://images.pattern.com/pattern_exp_logos/library.svg',
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

export function Work() {
  return (
    <section
      id="work"
      className="snap-start min-h-screen flex items-center justify-center py-20 px-6 bg-gray-800"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-4xl font-bold mb-12 text-purple-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="flex flex-col items-center gap-1">
                  <div className="h-20 flex items-center filter saturate-0 brightness-0 invert">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={200}
                      height={200}
                    />
                  </div>
                  <CardDescription className="text-gray-300 text-center">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-600 text-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
