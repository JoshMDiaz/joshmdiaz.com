import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface Post {
  title: string;
  preview: string;
  content: string[];
}

const posts: Post[] = [
  {
    title: "Building Teams Where Engineers Thrive, Not Just Perform",
    preview: "Performance without purpose is burnout waiting to happen. The best engineering teams aren't built on velocity metrics — they're built on clarity, trust, and growth.",
    content: [
      "Performance without purpose is burnout waiting to happen. The best engineering teams aren't built on velocity metrics — they're built on clarity, trust, and growth.",
      "Early in my leadership journey, I chased output. Sprint velocity. Cycle time. Lines of code reviewed. It felt productive. But over time, I noticed something: teams that hit their numbers didn't always feel good. And teams that didn't always hit their numbers sometimes built incredible things.",
      "What changed my perspective was focusing less on performance and more on the conditions that make performance sustainable.",
      "Clarity means every engineer knows what matters, why it matters, and how their work connects to something bigger. Not in a quarterly OKR doc they've never read — in their day-to-day.",
      "Trust means engineers feel safe to push back, ask questions, take risks, and fail without fear. It means leaders listen before they direct. It means feedback is a gift, not a weapon.",
      "Growth means career paths that are real — not decorative title ladders. It means mentorship is embedded into culture, not outsourced to a program.",
      "When these three things exist, engineers don't just perform — they thrive. They take ownership. They mentor others. They raise the bar without being asked.",
      "That's the team I want to build every time.",
    ],
  },
  {
    title: "Autonomy Without Accountability Is Chaos",
    preview: "Autonomy is one of the most misunderstood values in engineering culture. Teams hear 'autonomy' and think it means freedom without structure. But real autonomy only works inside a system of shared accountability.",
    content: [
      "Autonomy is one of the most misunderstood values in engineering culture. Teams hear 'autonomy' and think it means freedom without structure. But real autonomy only works inside a system of shared accountability.",
      "I've seen what happens when autonomy exists without accountability: inconsistent standards, duplicated work, teams drifting in different directions, and engineers who feel empowered but unsupported.",
      "The fix isn't to remove autonomy — it's to pair it with clarity.",
      "Clear expectations. Shared standards. Agreed-upon ways of working. When engineers understand the boundaries and the goals, they don't need to be told what to do. They figure it out — and they figure it out better than any top-down directive could.",
      "Accountability isn't about tracking or surveillance. It's about shared ownership. When a team agrees on what 'done' looks like, accountability becomes a cultural norm — not a management tool.",
      "The best teams I've led operated with high autonomy and high accountability. They moved fast because they trusted each other. They built quality because they held each other to a standard.",
      "If you want autonomous teams, invest in the system that makes autonomy safe. Define the guardrails. Align on outcomes. And then get out of the way.",
    ],
  },
];

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      ref={ref}
      className="rounded-lg border border-border/60 bg-card/40 p-8 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight leading-tight">
        {post.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {post.preview}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 mb-6 border-t border-border/40 pt-6">
              {post.content.slice(1).map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        {expanded ? "Read less" : "Read full article"}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </motion.article>
  );
};

const WritingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-24 md:py-32" id="writing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Writing & Thinking
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Leadership perspectives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
