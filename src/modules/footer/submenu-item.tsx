import { Text } from "@app/components/design-components";
import Link from "next/link";

interface SubitemProps {
  name: string;
  link: string;
}

export function SubmenuItem({ name, link }: SubitemProps) {
  return (
    <li>
      <Link href={link}>
        <Text variant="footer" weight="light" as="span">
          {name}
        </Text>
      </Link>
    </li>
  );
}
