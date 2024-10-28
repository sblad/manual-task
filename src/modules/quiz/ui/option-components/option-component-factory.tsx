import { QuestionType, QuizOption } from "@app/lib/types";
import { useOptionComponent } from "../../application/use-option-component";

export interface OptionComponentFactoryProps {
  questionType: QuestionType;
  option: QuizOption;
  onAnwserSelected: (value: string | boolean, isRejection: boolean) => void;
  previouslySelected: boolean;
}

export function OptionComponentFactory({
  questionType,
  option,
  onAnwserSelected,
  previouslySelected,
}: OptionComponentFactoryProps) {
  const Component = useOptionComponent(questionType);

  return (
    <Component
      previouslySelected={previouslySelected}
      option={option}
      onAnwserSelected={onAnwserSelected}
    />
  );
}
