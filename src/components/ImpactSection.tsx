import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ImpactBlock {
  title: string;
  bullets: string[];
}

const blocks: ImpactBlock[] = [
  {
    title: "Scaling Engineering Organizations",
    bullets: [
      "Helped grow frontend organization from a single engineer to 40+ engineers",
      "Built hiring standards and mentorship culture",
      "Developed leadership layers and career path clarity",
    ],
  },
  {
    title: "Frontend Modernization",
    bullets: [
      "Led React + TypeScript + Tailwind adoption across platforms",
      "Modernized legacy ecommerce systems",
      "Improved scalability and developer velocity",
    ],
  },
  {
    title: "Revenue-Scale Platform Support",
    bullets: [
      "Contributed to digital platforms supporting company growth from $20M to $2B+",
      "Delivered performant, conversion-focused web applications",
      "Partnered cross-functionally with Product & Design leadership",
    ],
  },
];

const ImpactCard = ({ block, index }: { block: ImpactBlock; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-lg border border-border/60 bg-card/40 p-8 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight">{block.title}</h3>
      <ul className="space-y-3">
        {block.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-24 md:py-32" id="impact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Selected Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Strategic highlights</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((block, i) => (
            <ImpactCard key={block.title} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
