import { AnswerInsertType } from './../types/answerTypes';
import { prisma } from './../config/database';

export async function insert(questionId: number, answerData: AnswerInsertType) {
    const {answeredBy, answer} = answerData;
    
    await prisma.answers.create({
        data: {
            questionId,
            answeredBy,
            answer
        }
    });
}
