import Link from "next/link";
import Image from "next/image";
import { Text } from "@app/components/design-components";

export function FollowUs() {
  return (
    <div>
      <Text
        variant="body-small"
        as="h3"
        weight="bold"
        className="uppercase tracking-[0.15em]"
      >
        Follow us
      </Text>
      <div className="mt-[20px] flex gap-[20px]">
        <Link href="#">
          <Image src="/fb.svg" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/google.svg" alt="Google" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
