export interface Question {
    id: number;
    askedBy: string;
    question: string;
    createdAt: Date;
}

export type QuestionInsertType = Omit<Question,"id" | "createdAt">;