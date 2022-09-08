export interface Answer {
    id: number;
    answeredBy: String;
    answer: String;
    questionId: number;
    createdAt: Date;
}

export type AnswerInsertType = Omit<Answer,"id" | "createdAt" | "questionId">;