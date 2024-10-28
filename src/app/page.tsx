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
        {/* With experimental ppr enabled this could dynamically load about page content */}
        <Suspense fallback={<AboutSkeleton />}>
          <AboutSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
