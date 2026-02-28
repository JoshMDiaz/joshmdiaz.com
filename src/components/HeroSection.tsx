import { motion } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
              Engineering Leader · Director of Front-End Engineering
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-balance mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Building high-performing engineering teams — and the systems that
            power them.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            People-first engineering leader. Frontend architect. Organizational
            builder.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Scaling frontend organizations and modern platforms that have
            supported growth from $20M to $2B+ in revenue — while building
            cultures rooted in clarity, autonomy, and accountability.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
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
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
