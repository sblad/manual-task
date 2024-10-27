import { Text } from "@app/components/design-components/typography";
import clsx from "clsx";

const buttonVariants = {
  hero: "bg-brand-red text-white",
};

interface Props {
  variant: keyof typeof buttonVariants;
  children?: React.ReactNode;
}

// Add click handler and some hover effects
export function Button({ variant, children }: Props) {
  return (
    <button className={clsx(buttonVariants[variant], "px-[30px] py-[15px]")}>
      <Text as="span" variant="body-small" className="block uppercase">
        {children}
      </Text>
    </button>
  );
}
