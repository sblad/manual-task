"use client";

import { QuizResponse } from "@app/lib/types";
import { useQuizState } from "./application/use-quiz-state";

export function Quiz({ quizData }: { quizData: QuizResponse }) {
  const { currentQuestion, answerQuestion, isCompleted, isFailed } =
    useQuizState(quizData);

  if (isCompleted) {
    return <div>Quiz completed</div>;
  }

  if (isFailed) {
    return <div>Quiz failed</div>;
  }

  return (
    <div>
      <div>{currentQuestion.question}</div>
      <div>
        {currentQuestion.options.map((option, index) => (
          <div className="flex gap-10" key={currentQuestion.question + index}>
            <div
              onClick={() => answerQuestion(option.value, option.isRejection)}
            >
              {String(option.value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
