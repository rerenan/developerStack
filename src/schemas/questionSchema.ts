import Joi from 'joi';
 import { QuestionInsertType } from '../types/questionTypes';

export const questionSchema = Joi.object<QuestionInsertType>({
  askedBy: Joi.string().required(),
  question: Joi.string().required()
});
