import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StarField from "@/components/StarField";

export default function Home() {
  return (
    <>
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
      </main>
    </>
  );
}
