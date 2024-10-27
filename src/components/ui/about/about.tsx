import { Text } from "@app/components/design-components";
import { getAboutData } from "./application/get-about-data";
import { AboutItem } from "./about-item";

export async function AboutSection() {
  // Let's assume this data might come from a cms or an api
  const { viewModel } = await getAboutData();

  return (
    <section className="max-w-[90%] lg:max-w-[66%] m-auto pb-[90px]">
      <Text as="h2" variant="h2" className="text-center pt-4 md:pt-16">
        What we can help with
      </Text>
      <div className="flex flex-col gap-12 lg:gap-[180px] mt-8 md:mt-[70px]">
        {viewModel.sectionData.map((data, index) => (
          <AboutItem
            key={data.id}
            data={data}
            viewModel={viewModel}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
