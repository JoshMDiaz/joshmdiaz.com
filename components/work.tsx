'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website built with Next.js and Stripe integration.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    link: 'https://example-ecommerce.com',
    logo: '/placeholder.svg?height=80&width=80',
  },
  {
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with real-time updates.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    link: 'https://example-taskmanager.com',
    logo: '/placeholder.svg?height=80&width=80',
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard using data from multiple APIs.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    link: 'https://example-weather.com',
    logo: '/placeholder.svg?height=80&width=80',
  },
]

export function Work() {
  return (
    <section id="work" className="snap-start min-h-screen flex items-center justify-center py-20 px-6 bg-gray-800">
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
                <CardHeader className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl text-purple-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-center">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-600 text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
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

