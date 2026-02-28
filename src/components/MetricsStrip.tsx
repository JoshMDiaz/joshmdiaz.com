import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MetricProps {
  value: string;
  label: string;
  delay: number;
}

const AnimatedMetric = ({ value, label, delay }: MetricProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="text-center px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">{value}</div>
      <div className="text-sm md:text-base text-muted-foreground font-medium tracking-wide">{label}</div>
    </motion.div>
  );
};

const metrics = [
  { value: "10+", label: "Years Engineering & Platform Experience" },
  { value: "3+", label: "Years Engineering Leadership" },
  { value: "1 → 40+", label: "Engineers — Team Growth & Org Scaling" },
  { value: "$2B+", label: "Revenue — Platform Impact Supported" },
];

const MetricsStrip = () => {
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-border/40">
          {metrics.map((m, i) => (
            <AnimatedMetric key={m.label} value={m.value} label={m.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
