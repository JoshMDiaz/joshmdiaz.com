import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ApproachBlock {
  title: string;
  description: string;
}

const approaches: ApproachBlock[] = [
  {
    title: "Systems Over Components",
    description:
      "I design frontend applications as systems — prioritizing strong typing, predictable state management, reusable foundations, and long-term maintainability.",
  },
  {
    title: "Performance as a Discipline",
    description:
      "Performance is not an afterthought. I focus on scalable architecture, efficient rendering patterns, and thoughtful UX tradeoffs in high-traffic environments.",
  },
  {
    title: "Developer Experience Matters",
    description:
      "Strong internal standards, clear patterns, and well-designed component systems improve velocity and reduce friction across teams.",
  },
];

const ApproachCard = ({ block, index }: { block: ApproachBlock; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="p-8 md:p-10"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-4 tracking-tight text-foreground">
        {block.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-base">
        {block.description}
      </p>
    </motion.div>
  );
};

const EngineeringApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-28 md:py-36" id="approach">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Engineering Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How I think about frontend architecture
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {approaches.map((block, i) => (
            <ApproachCard key={block.title} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
