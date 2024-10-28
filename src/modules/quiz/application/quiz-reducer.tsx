import { QuizEvents } from "../domain/quiz-events";
import { QuizState } from "../types/quiz-state";

export function reducer(state: QuizState, action: QuizEvents): QuizState {
  switch (action.type) {
    case "question-answered":
      if (action.isRejecting) {
        return {
          ...state,
          answers: {
            ...state.answers,
            [action.questionIndex]: action.questionAnswer,
          },
          status: "failed",
        };
      }

      if (state.currentQuestionIndex === state.totalQuestions - 1) {
        return {
          ...state,
          answers: {
            ...state.answers,
            [action.questionIndex]: action.questionAnswer,
          },
          status: "completed",
        };
      }

      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionIndex]: action.questionAnswer,
        },
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "go-back": {
      if (state.currentQuestionIndex === 0) {
        return state;
      }

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };
    }
    case "start-over": {
      return {
        status: "in-progress",
        totalQuestions: state.totalQuestions,
        currentQuestionIndex: 0,
        answers: {},
      };
    }
    default:
      return state;
  }
}
