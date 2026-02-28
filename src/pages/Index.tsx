import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import MetricsStrip from "@/components/MetricsStrip";
import PhilosophySection from "@/components/PhilosophySection";
import ImpactSection from "@/components/ImpactSection";
import WritingSection from "@/components/WritingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josh Diaz",
  jobTitle: "Director of Front-End Engineering",
  description:
    "People-first engineering leader. Frontend architect. Building high-performing teams and the systems that power them.",
  url: "https://joshdiaz.dev",
  sameAs: ["https://www.linkedin.com/in/joshdiaz"],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <MetricsStrip />
        <PhilosophySection />
        <ImpactSection />
        <WritingSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
