'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-3xl">
        <motion.h2
          className="text-4xl font-bold mb-8 text-purple-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="space-y-6 text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I&apos;m{' '}
            <span className="font-semibold text-purple-400">Josh</span>, a
            passionate front-end developer with a keen eye for creating
            beautiful, responsive, and user-friendly websites and applications.
          </p>
          <p>
            With{' '}
            <span className="font-semibold text-purple-400">10+ years</span> of
            experience in the field, I specialize in modern web technologies
            including React, Next.js, and Tailwind CSS. I&apos;m dedicated to
            crafting clean, efficient code that brings designs to life and
            enhances user experiences.
          </p>
          <p>
            When I&apos;m not coding, you can find me on a pickleball court! I
            believe in continuous learning and staying up-to-date with the
            latest web development trends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
