import { QuestionType, QuizOption } from "@app/lib/types";
import { useOptionComponent } from "../../application/use-option-component";

export interface OptionComponentFactoryProps {
  questionType: QuestionType;
  option: QuizOption;
  onAnwserSelected: (value: string | boolean, isRejection: boolean) => void;
}

export function OptionComponentFactory({
  questionType,
  option,
  onAnwserSelected,
}: OptionComponentFactoryProps) {
  const Component = useOptionComponent(questionType);

  return <Component option={option} onAnwserSelected={onAnwserSelected} />;
}
