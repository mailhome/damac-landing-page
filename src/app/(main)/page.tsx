import AboutUs from "@/components/main/about-us";
import Collaborators from "@/components/main/collaborators";
import DemacGallery from "@/components/main/demac-gallery";
import Download from "@/components/main/download";
import ExploreDemac from "@/components/main/explore-demac"
import Foundations from "@/components/main/foundations";
import Hero from "@/components/main/hero";
import Investment from "@/components/main/investment";
import WhyDemac from "@/components/main/why-demac";



export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero  />
      <AboutUs />
      <WhyDemac />
      <ExploreDemac />
      <DemacGallery />
      <Collaborators />
      <Foundations />
      <Download />
      <Investment />
    </main>
  );
}

