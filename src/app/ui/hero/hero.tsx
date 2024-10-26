import Image from "next/image";
import { Button, Text } from "@app/app/design-components";

export function HeroSection() {
  return (
    <section className="h-[100vh] max-h-[750px] bg-[url('/hero-bg.png')] bg-cover">
      <div className="w-[80%] mx-auto pt-8">
        {/* // TODO link to manual.co */}
        <Image src="/symbol.svg" alt="Manual symbol" width={40} height={40} />
        <div className="mt-32 w-[40%]">
          <Text variant="h1" as="h1" className="pb-5">
            Be good to yourself
          </Text>
          <Text as="p" variant="body" weight="light" className="pb-9">
            We&apos;re working around the clock to bring you a holistic approach
            to your wellness. From top to bottom, inside and out.
          </Text>
          <Button variant="hero">Take the quiz</Button>
        </div>
      </div>
    </section>
  );
}
