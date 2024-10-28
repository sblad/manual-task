import QuizPage from "@app/app/quiz/page";
import { Modal } from "@app/components/design-components/modal";

export default function QuizModal() {
  return (
    <Modal closeHref="/">
      <QuizPage />
    </Modal>
  );
}
