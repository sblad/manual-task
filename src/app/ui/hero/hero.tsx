import Image from "next/image";
import { Button, Text } from "@app/app/design-components";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pb-12 md:max-h-[750px] bg-green-600 bg-center lg:bg-top md:bg-[url('/hero-bg.png')] bg-cover">
      <div className="w-[90%] md:w-[80%] mx-auto pt-8">
        <Link href="#">
          <Image src="/logo.svg" alt="Manual symbol" width={40} height={40} />
        </Link>
        <div className="mt-4 md:mt-32 md:w-[60%] lg:w-[40%]">
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
