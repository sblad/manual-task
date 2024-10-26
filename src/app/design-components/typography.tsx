import { clsx } from "clsx";

interface Props {
  variant: "h1" | "h2" | "h3" | "body" | "body-small";
  children: React.ReactNode;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  weight?: "light" | "normal" | "bold";
}

const fontSize = {
  h1: "text-2xl",
  h2: "text-xl",
  h3: "text-l",
  body: "text-md",
  "body-small": "text-xs",
};

const fontWeight = {
  light: "font-light",
  normal: "font-normal",
  bold: "font-bold",
};

export function Text({
  variant,
  children,
  as: Component,
  className,
  weight = "normal",
}: Props) {
  return (
    <Component
      className={clsx(fontSize[variant], fontWeight[weight], className)}
    >
      {children}
    </Component>
  );
}
