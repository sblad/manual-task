import { Quiz } from "@app/modules/quiz/ui/quiz";
import { fetchQuizData } from "@app/lib/data";

export default async function QuizPage() {
  const quizData = await fetchQuizData();

  return <Quiz quizData={quizData} />;
}
