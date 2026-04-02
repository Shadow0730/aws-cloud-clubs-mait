import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
