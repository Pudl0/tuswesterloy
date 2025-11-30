import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/About";
import Documents from "@/components/landingpage/Documents";
import SocialMedia from "@/components/landingpage/SocialMedia";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Documents />
      <SocialMedia />
    </div>
  );
}
