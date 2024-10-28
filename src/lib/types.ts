export interface AboutData {
  id: string;
  subtitle: string;
  title: string;
  content: string;
  imgUrl: string;
}

export interface FooterSubitem {
  name: string;
  link: string;
}

export interface FooterSection {
  section: string;
  items: FooterSubitem[];
}

export interface QuizOption {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}

// only single question type is present right now. Including that in the type for future extensibility
export type QuestionType = "ChoiceType";

export interface QuizQuestion {
  display?: string;
  question: string;
  type: QuestionType;
  options: QuizOption[];
}

export interface QuizResponse {
  questions: QuizQuestion[];
}
