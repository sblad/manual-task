import { Quiz } from "@app/components/ui/quiz/quiz";
import { fetchQuizData } from "@app/lib/data";

export default async function QuizPage() {
  const quizData = await fetchQuizData();

  return <Quiz quizData={quizData} />;
}
