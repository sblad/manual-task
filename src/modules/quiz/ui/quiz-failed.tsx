import { Button, Text } from "@app/components/design-components";
import { useRouter } from "next/navigation";

interface Props {
  onStartOver: () => void;
}

export function QuizFailed({ onStartOver }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-[60%] h-full mx-auto text-center items-center">
      <Text variant="h2" as="h1">
        Unfortunately, we are unable to prescribe this medication for you.
      </Text>
      <div className="mt-[30px] pb-[30px]">
        This is because finasteride can alter the PSA levels, which may be used
        to monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => router.push("/")}>
          Close
        </Button>
        <Button variant="outline" onClick={onStartOver}>
          Start over
        </Button>
      </div>
    </div>
  );
}
