import { prisma } from './../config/database';
import { QuestionInsertType } from './../types/questionTypes';


export async function insert(questionData: QuestionInsertType) {
    const {askedBy, question} = questionData;
    
    await prisma.questions.create({
        data: {
            askedBy,
            question
        }
    });
}

export async function getAll() {
    const result = await prisma.questions.findMany();
    return result;
}