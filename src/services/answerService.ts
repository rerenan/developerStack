import { AnswerInsertType } from './../types/answerTypes';
import * as answerRepository from "../repositories/answerRepository"

export async function createAnswer( questionId: number, answerData: AnswerInsertType){
    await answerRepository.insert(questionId ,answerData);
};