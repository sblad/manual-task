import { Text } from "@app/components/design-components";
import Image from "next/image";
import { FollowUs } from "./follow-us";
import { Submenus } from "./submenus";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-green-300 pt-[36px] lg:pt-[72px]">
      <div className="w-[80%] m-auto flex flex-col lg:flex-row items-start justify-between pb-[72px]">
        <Link href="#">
          <Image src="/logo.svg" alt="Manual symbol" width={75} height={75} />
        </Link>
        <div className="flex gap-[25px] mt-[20px] lg:mt-0">
          <Submenus />
          <FollowUs />
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-green-400 m-auto"></div>
      <div className="text-green-500 flex justify-center py-[25px]">
        <Text variant="footer" as="p" weight="light">
          © 2021 Manual. All rights reserverd
        </Text>
      </div>
    </footer>
  );
}
