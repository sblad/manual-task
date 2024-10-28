import { Text } from "@app/components/design-components/typography";
import clsx from "clsx";

const buttonVariants = {
  hero: "bg-brand-red text-white hover:opacity-[0.6]",
};

interface Props {
  variant: keyof typeof buttonVariants;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(buttonVariants[variant], "px-[30px] py-[15px]")}
    >
      <Text as="span" variant="body-small" className="block uppercase">
        {children}
      </Text>
    </button>
  );
}
