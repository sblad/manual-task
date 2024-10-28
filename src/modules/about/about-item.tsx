import { Text } from "@app/components/design-components";
import Image from "next/image";
import { AboutData } from "@app/lib/types";
import { AboutViewModel } from "./domain/about.view-model";

interface Props {
  data: AboutData;
  viewModel: AboutViewModel;
  index: number;
}

export function AboutItem({ data, viewModel, index }: Props) {
  return (
    <div
      key={data.id}
      className="group gap-4 lg:gap-0 flex flex-col items-center md:flex-row md:even:flex-row-reverse"
    >
      <Image
        src={data.imgUrl}
        width={370}
        height={445}
        alt={data.subtitle}
        className="shrink-0"
      />
      <div className="mt-4 md:mt-0 lg:group-odd:pl-[120px] lg:group-even:pr-[120px] relative flex flex-col text-center lg:text-left justify-center">
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
        <div className="hidden md:block absolute group-odd:left-[-15%] group-even:right-[-15%] text-[200px] lg:text-[450px] text-[#F3F7F4] -z-10 overflow-hidden">
          {viewModel.getSectionIndex(index)}
        </div>
      </div>
    </div>
  );
}
