export interface Answer {
    id: number;
    answeredBy: String;
    answer: String;
    questionId: number;
    createdAt: Date;
}

export type QuestionInsertType = Omit<Answer,"id" | "createdAt" | "questionId">;