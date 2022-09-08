import Joi from 'joi';
import { AnswerInsertType } from '../types/answerTypes';

export const answerSchema = Joi.object<AnswerInsertType>({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
