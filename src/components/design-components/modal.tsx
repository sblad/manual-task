import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  closeHref: string;
}

export function Modal({ children, closeHref }: Props) {
  return (
    <div className="fixed top-0 w-screen h-screen bg-white">
      <Link href={closeHref}>
        <Image
          src="/close.svg"
          width={32}
          height={32}
          alt="Close modal"
          className="absolute top-10 right-10"
        />
      </Link>
      {children}
    </div>
  );
}
