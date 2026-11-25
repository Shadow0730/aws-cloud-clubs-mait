import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopicStrip from "@/components/TopicStrip";
import Modules from "@/components/Modules";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <TopicStrip />
        <Modules />
        <HowItWorks />
        <CTA />
      </main>
      <Contacts />
      <Footer />
    </>
  );
}
