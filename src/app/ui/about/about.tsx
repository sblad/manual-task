import { Text } from "@app/app/design-components";
import { fetchAboutData } from "@app/app/lib/data";
import Image from "next/image";

export async function AboutSection() {
  // Let's assume this data might come from a cms or an api
  // TODO move logic to hook and add view model for index display
  const sectionData = await fetchAboutData();

  return (
    <section className="max-w-[66%] m-auto">
      <Text as="h2" variant="h2" className="text-center pt-16">
        What we can help with
      </Text>
      <div className="flex flex-col gap-[180px] mt-[70px]">
        {sectionData.map((data, index) => (
          <div key={data.id} className="group flex even:flex-row-reverse">
            <Image
              src={data.imgUrl}
              width={370}
              height={445}
              alt={data.subtitle}
            />
            <div className="group-odd:pl-[120px] group-even:pr-[120px] relative flex flex-col justify-center">
              <Text
                as="h3"
                variant="body-small"
                className="uppercase opacity-[0.7] tracking-[0.15em] pb-3"
              >
                {data.subtitle}
              </Text>
              <Text as="h1" variant="h3">
                {data.title}
              </Text>
              <Text as="p" variant="body" weight="light" className="pt-5">
                {data.content}
              </Text>
              <div className="absolute top-[-25%] group-odd:left-[-15%] group-even:right-[-15%] text-[450px] text-[#F3F7F4] -z-10">
                0{index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
