export interface Answer {
    id: number;
    answeredBy: string;
    answer: string;
    questionId: number;
    createdAt: Date;
}

export type AnswerInsertType = Omit<Answer,"id" | "createdAt" | "questionId">;