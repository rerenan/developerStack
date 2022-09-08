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
