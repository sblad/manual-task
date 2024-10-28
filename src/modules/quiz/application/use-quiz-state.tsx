import { useReducer } from "react";
import { reducer } from "./quiz-reducer";
import { QuizResponse } from "@app/lib/types";
import { QuizModel } from "../domain/quiz-model";
import { GoBackEvent, QuestionAnsweredEvent } from "../domain/quiz-events";

export const useQuizState = (quizData: QuizResponse) => {
  const [state, dispatch] = useReducer(reducer, {
    status: "in-progress",
    totalQuestions: quizData.questions.length,
    currentQuestionIndex: 0,
    answers: {},
  });

  const quizModel = new QuizModel(state, quizData);

  const answerQuestion = (value: string | boolean, isRejection: boolean) => {
    dispatch(
      new QuestionAnsweredEvent(state.currentQuestionIndex, value, isRejection)
    );
  };

  const goBack = () => {
    dispatch(new GoBackEvent());
  };

  const startOver = () => {
    dispatch({ type: "start-over" });
  };

  return {
    currentQuestion: quizModel.getQuestion(),
    answerQuestion,
    goBack,
    startOver,
    isCompleted: quizModel.isCompleted(),
    isFailed: quizModel.isFailed(),
    canGoBack: quizModel.canGoBack(),
    previousAnswer: state.answers[state.currentQuestionIndex],
  };
};
