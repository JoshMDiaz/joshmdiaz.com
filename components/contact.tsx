'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="snap-start min-h-screen flex items-center justify-center py-20 px-6 bg-gray-800"
    >
      <div className="max-w-md w-full">
        <motion.h2
          className="text-4xl font-bold mb-8 text-purple-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Name
            </label>
            <Input
              id="name"
              placeholder="Your Name"
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              className="bg-gray-700 border-gray-600 text-gray-100"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Send Message
          </Button>
        </motion.form>
        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/joshmdiaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/JoshMDiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
