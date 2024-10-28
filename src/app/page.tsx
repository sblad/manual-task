import { Suspense } from "react";
import { AboutSection } from "../modules/about/about";
import { HeroSection } from "../modules/hero/hero";
import { AboutSkeleton } from "../modules/about/about-skeleton";
import { Footer } from "../modules/footer/footer";

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
