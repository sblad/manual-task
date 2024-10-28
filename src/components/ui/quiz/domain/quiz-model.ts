import { QuizResponse } from "@app/lib/types";
import { QuizState } from "../types/quiz-state";

export class QuizModel {
  constructor(
    private readonly state: QuizState,
    private readonly data: QuizResponse
  ) {}

  public getQuestion() {
    return this.data.questions[this.state.currentQuestionIndex];
  }

  public isCompleted() {
    return this.state.status === "completed";
  }

  public isFailed() {
    return this.state.status === "failed";
  }
}
