export interface Question {
    id: number;
    askedBy: String;
    question: String;
    createdAt: Date;
}

export type QuestionInsertType = Omit<Question,"id" | "createdAt">;