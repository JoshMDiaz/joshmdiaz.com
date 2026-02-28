import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 py-24 md:py-32" id="philosophy">
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
          Leadership Philosophy
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">
          I believe great engineering organizations are built on clarity, trust, and growth.
        </h2>

        <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed text-left md:text-center">
          <p>
            <span className="text-foreground font-medium">Clarity</span> in expectations.{" "}
            <span className="text-foreground font-medium">Trust</span> in people.{" "}
            <span className="text-foreground font-medium">Growth</span> in both skill and character.
          </p>

          <p>
            Autonomy works when accountability is shared.
            <br className="hidden md:block" />{" "}
            Velocity improves when standards are strong.
            <br className="hidden md:block" />{" "}
            Culture strengthens when career paths are intentional.
          </p>

          <p className="text-foreground/90">
            My role as a leader isn't to control output. It's to build systems — technical
            and human — where engineers can do the best work of their careers.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PhilosophySection;
