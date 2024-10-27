import { Suspense } from "react";
import { AboutSection } from "./ui/about/about";
import { HeroSection } from "./ui/hero/hero";
import { AboutSkeleton } from "./ui/about/about-skeleton";

export default function LandingPage() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <Suspense fallback={<AboutSkeleton />}>
          <AboutSection />
        </Suspense>
      </main>
      <footer className="">Footer content will be here...</footer>
    </div>
  );
}
