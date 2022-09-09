import { QuestionInsertType } from './../types/questionTypes';
import * as questionRepository from "../repositories/questionRepository"

export async function createQuestion(questionData: QuestionInsertType){
    await questionRepository.insert(questionData);
};

export async function getAllQuestions() {
    const result = questionRepository.getAll();
    return result;
}

export async function getQuestionById(questionId:number) {
    const result = questionRepository.getById(questionId);
    return result;
}