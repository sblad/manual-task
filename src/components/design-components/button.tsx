import { Text } from "@app/components/design-components/typography";
import clsx from "clsx";

const buttonVariants = {
  hero: "bg-brand-red text-white hover:opacity-[0.6]",
  outline: "border border-gray-300 hover:bg-gray-100",
};

interface Props {
  variant: keyof typeof buttonVariants;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ variant, children, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        buttonVariants[variant],
        "px-[30px] py-[15px]",
        className
      )}
    >
      <Text as="span" variant="body-small" className="block uppercase">
        {children}
      </Text>
    </button>
  );
}
