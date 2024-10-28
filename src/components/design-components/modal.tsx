"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export function Modal({ children }: Props) {
  const router = useRouter();

  return (
    <div className="fixed top-0 w-screen h-screen bg-white">
      <button onClick={() => router.back()}>
        <Image
          src="/close.svg"
          width={32}
          height={32}
          alt="Close modal"
          className="absolute top-10 right-10"
        />
      </button>
      {children}
    </div>
  );
}
