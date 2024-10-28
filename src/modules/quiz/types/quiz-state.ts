type QuizStatus = "in-progress" | "completed" | "failed";

export interface QuizState {
  status: QuizStatus;
  totalQuestions: number;
  currentQuestionIndex: number;
  answers: Record<number, string | boolean>;
}
