import { beforeEach, describe, it, expect } from "vitest";
import { reducer } from "./quiz-reducer";
import {
  GoBackEvent,
  QuestionAnsweredEvent,
  StartOverEvent,
} from "../domain/quiz-events";
import { QuizState } from "../types/quiz-state";

describe("QuizReducer", () => {
  let fixtures: ReturnType<typeof getFixtures>;

  beforeEach(() => {
    fixtures = getFixtures();
  });

  it("accepts answer", () => {
    const result = fixtures.sut(
      fixtures.input.initialState,
      new QuestionAnsweredEvent(0, "answer", false)
    );

    expect(result).toEqual({
      status: "in-progress",
      totalQuestions: 3,
      currentQuestionIndex: 1,
      answers: {
        0: "answer",
      },
    });
  });

  it("completes on last step", () => {
    const result = fixtures.sut(
      { ...fixtures.input.initialState, currentQuestionIndex: 2 },
      new QuestionAnsweredEvent(2, "answer", false)
    );

    expect(result).toEqual({
      status: "completed",
      totalQuestions: 3,
      currentQuestionIndex: 2,
      answers: {
        2: "answer",
      },
    });
  });

  it("fails on rejection", () => {
    const result = fixtures.sut(
      fixtures.input.initialState,
      new QuestionAnsweredEvent(0, "answer", true)
    );

    expect(result).toEqual({
      status: "failed",
      totalQuestions: 3,
      currentQuestionIndex: 0,
      answers: {
        0: "answer",
      },
    });
  });

  it("resets state", () => {
    const result = fixtures.sut(
      { ...fixtures.input.initialState, status: "failed" },
      new StartOverEvent()
    );

    expect(result).toEqual({
      status: "in-progress",
      totalQuestions: 3,
      currentQuestionIndex: 0,
      answers: {},
    });
  });

  it("allows to go back", () => {
    const result = fixtures.sut(
      { ...fixtures.input.initialState, currentQuestionIndex: 1 },
      new GoBackEvent()
    );

    expect(result).toEqual({
      status: "in-progress",
      totalQuestions: 3,
      currentQuestionIndex: 0,
      answers: {},
    });
  });

  const getFixtures = () => {
    return {
      input: {
        initialState: {
          status: "in-progress",
          totalQuestions: 3,
          currentQuestionIndex: 0,
          answers: {},
        } as QuizState,
      },
      sut: reducer,
    };
  };
});
