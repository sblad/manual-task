import { Suspense } from "react";
import { AboutSection } from "../components/ui/about/about";
import { HeroSection } from "../components/ui/hero/hero";
import { AboutSkeleton } from "../components/ui/about/about-skeleton";
import { Footer } from "../components/ui/footer/footer";

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
