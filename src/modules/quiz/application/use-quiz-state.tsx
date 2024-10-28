"use client";

import { useEffect, useReducer } from "react";
import { reducer } from "./quiz-reducer";
import { QuizResponse } from "@app/lib/types";
import { QuizModel } from "../domain/quiz-model";
import {
  GoBackEvent,
  QuestionAnsweredEvent,
  StartOverEvent,
} from "../domain/quiz-events";
import StorageService from "@app/utils/storage-service";

export const useQuizState = (quizData: QuizResponse) => {
  const storedState = StorageService.readState();

  const [state, dispatch] = useReducer(
    reducer,
    storedState
      ? storedState
      : {
          status: "in-progress",
          totalQuestions: quizData.questions.length,
          currentQuestionIndex: 0,
          answers: {},
        }
  );

  useEffect(() => {
    StorageService.writeState(state);
  }, [state]);

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
    dispatch(new StartOverEvent());
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
