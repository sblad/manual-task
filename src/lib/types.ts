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

interface QuizOption {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}

interface QuizQuestion {
  display?: string;
  question: string;
  type: string;
  options: QuizOption[];
}

export interface QuizResponse {
  questions: QuizQuestion[];
}
