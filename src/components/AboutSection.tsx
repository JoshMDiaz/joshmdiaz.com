import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 py-28 md:py-36" id="about">
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
          About
        </p>

        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground">Josh is a Staff-level frontend architect and engineering leader</span> with
            10+ years of experience designing scalable web systems in high-growth environments.
          </p>
          <p>
            He focuses on frontend architecture, system design, performance optimization, and building strong
            engineering cultures rooted in clarity and autonomy.
          </p>
          <p className="text-muted-foreground/70">
            His approach centers on long-term thinking — establishing standards, ownership models, and technical
            foundations that allow teams and platforms to scale together.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
