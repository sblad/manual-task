export class QuestionAnsweredEvent {
  public static readonly type = "question-answered" as const;
  public readonly type = QuestionAnsweredEvent.type;

  constructor(
    public readonly questionIndex: number,
    public readonly questionAnswer: string | boolean,
    public readonly isRejecting: boolean
  ) {}
}

export class GoBackEvent {
  public static readonly type = "go-back" as const;
  public readonly type = GoBackEvent.type;

  constructor() {}
}

export type QuizEvents = QuestionAnsweredEvent | GoBackEvent;
