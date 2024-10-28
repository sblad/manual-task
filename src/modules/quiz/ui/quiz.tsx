"use client";

import { QuizResponse } from "@app/lib/types";
import { useQuizState } from "../application/use-quiz-state";
import { QuizFailed } from "./quiz-failed";
import { QuizCompleted } from "./quiz-completed";
import { Button, Text } from "@app/components/design-components";
import { OptionComponentFactory } from "./option-components/option-component-factory";
import { useRouter } from "next/navigation";

export function Quiz({ quizData }: { quizData: QuizResponse }) {
  const {
    currentQuestion,
    answerQuestion,
    isCompleted,
    isFailed,
    canGoBack,
    goBack,
    startOver,
    previousAnswer,
  } = useQuizState(quizData);

  const router = useRouter();

  if (isCompleted) {
    return <QuizCompleted onStartOver={startOver} />;
  }

  if (isFailed) {
    return <QuizFailed onStartOver={startOver} />;
  }

  return (
    <div className="flex flex-col max-w-[60%] h-full mx-auto text-center items-center overflow-y-scroll pb-12">
      <Text variant="h2" as="h1">
        {currentQuestion.question}
      </Text>
      <div className="mt-[30px] pb-[30px] grid grid-cols-2 gap-6">
        {currentQuestion.options.map((option, index) => (
          <OptionComponentFactory
            onAnwserSelected={answerQuestion}
            questionType={currentQuestion.type}
            option={option}
            key={String(option.value) + index}
            previouslySelected={option.value === previousAnswer}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => router.push("/")}>
          Close
        </Button>
        {canGoBack && (
          <Button variant="outline" onClick={goBack}>
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
}
