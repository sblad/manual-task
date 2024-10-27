import { Suspense } from "react";
import { AboutSection } from "./ui/about/about";
import { HeroSection } from "./ui/hero/hero";
import { AboutSkeleton } from "./ui/about/about-skeleton";
import { Footer } from "./ui/footer/footer";

export default function LandingPage() {
  return (
    <div>
      <main>
        <HeroSection />
        <Suspense fallback={<AboutSkeleton />}>
          <AboutSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
