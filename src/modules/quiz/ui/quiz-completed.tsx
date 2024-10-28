import { Button, Text } from "@app/components/design-components";
import { useRouter } from "next/navigation";

interface Props {
  onStartOver: () => void;
}

export function QuizCompleted({ onStartOver }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-[60%] h-full mx-auto text-center items-center">
      <Text variant="h2" as="h1">
        Great news! We have the perfect treatment for your hair loss.
      </Text>
      <div className="mt-[30px] pb-[30px]">
        Proceed to www.manual.co, and prepare to say hello to your new hair!
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
