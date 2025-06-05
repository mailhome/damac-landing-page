import AboutUs from "@/components/main/about-us";
import Hero from "@/components/main/hero";
import WhyDemac from "@/components/main/why-demac";



export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero  />
      <AboutUs />
      <WhyDemac />
    </main>
  );
}

