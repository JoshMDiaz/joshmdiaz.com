import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profilePhoto from '@/assets/joshmdiaz.jpg'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-6 py-24 md:py-32" id="contact">
      {/* Profile Photo */}
      <motion.div
        className="flex justify-center flex-shrink-0 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-2 ring-border/50 shadow-2xl">
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Josh Diaz — Engineering Leader"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm tracking-wide">
              Headshot
            </div>
          )}
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Let's build great teams together.
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
          If you're scaling engineering, modernizing platforms, or investing in
          long-term organizational growth, I'd love to connect.
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
          I'm always open to conversations about building strong teams,
          thoughtful systems, and sustainable velocity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gap-2 px-8 h-12 text-base font-medium"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/joshdiaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-8 h-12 text-base font-medium"
            asChild
          >
            <a href="mailto:joshua.micahel.diaz@gmail.com">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
