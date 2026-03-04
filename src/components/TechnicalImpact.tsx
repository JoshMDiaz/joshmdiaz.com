import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface CaseStudySection {
  label: string;
  content: string;
}

const caseStudy = {
  title: "React + TypeScript Modernization at Revenue Scale",
  sections: [
    {
      label: "Context",
      content:
        "Legacy frontend systems across multiple ecommerce brands required modernization during rapid company growth. The existing architecture could not support the pace of feature development or the scale of engineering hiring.",
    },
    {
      label: "Challenge",
      content:
        "Multiple codebases with inconsistent patterns, a rapidly scaling team, and revenue-critical user flows that could not tolerate regression or downtime during migration.",
    },
    {
      label: "Approach",
      content:
        "Introduced a React + TypeScript architecture with standardized component patterns and a unified typing strategy. Established architectural review standards and defined clear migration paths that allowed incremental adoption without disrupting production.",
    },
    {
      label: "Impact",
      content:
        "Improved long-term maintainability and increased developer velocity across teams. Enabled scalable multi-brand development and supported platform growth from $20M to $2B+ in revenue.",
    },
  ] as CaseStudySection[],
};

const TechnicalImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="px-6 py-28 md:py-36" id="impact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Selected Technical Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Architecture at scale
          </h2>
        </motion.div>

        <motion.div
          className="rounded-lg border border-border/60 bg-card/40"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold mb-8 tracking-tight">
              {caseStudy.title}
            </h3>

            {/* Always show first two sections */}
            <div className="space-y-8">
              {caseStudy.sections.slice(0, 2).map((section) => (
                <div key={section.label}>
                  <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-2">
                    {section.label}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-8 mt-8 pt-8 border-t border-border/40">
                    {caseStudy.sections.slice(2).map((section) => (
                      <div key={section.label}>
                        <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-2">
                          {section.label}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-8"
            >
              {expanded ? "Show less" : "Read full case study"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalImpact;
