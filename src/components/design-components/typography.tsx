import { clsx } from "clsx";

const fontSize = {
  h1: "text-xl md:text-2xl",
  h2: "text-l md:text-xl",
  h3: "text-l",
  body: "text-md",
  "body-small": "text-xs",
  footer: "text-sm",
};

const fontWeight = {
  light: "font-light",
  normal: "font-normal",
  bold: "font-bold",
};

interface Props {
  variant: keyof typeof fontSize;
  children: React.ReactNode;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  weight?: keyof typeof fontWeight;
}

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
