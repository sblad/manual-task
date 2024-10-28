import { QuestionType, QuizOption } from "@app/lib/types";
import { FC } from "react";
import { ChoiceTypeComponent } from "../ui/option-components/choice-type-component";

export interface OptionComponentProps {
  option: QuizOption;
  onAnwserSelected: (value: string | boolean, isRejection: boolean) => void;
}

export const useOptionComponent = (
  type: QuestionType
): FC<OptionComponentProps> => {
  // switch is exhaustive, only one type present
  switch (type) {
    case "ChoiceType":
      return ChoiceTypeComponent;
  }
};
