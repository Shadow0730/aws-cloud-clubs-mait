import Navbar from "../../components/Navbar";
import CommunityFooter from "@/components/CommunityFooter";
import CommunitySection from "@/components/CommunitySection";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-24">
        <CommunitySection />
      </main>
      <CommunityFooter />
    </>
  );
}
