import { Request, Response } from "express";

import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  const {askedBy, question} = req.body;

  await questionService.createQuestion({askedBy, question});

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy, answer} = req.body;
  const questionId = Number(req.params.id);

  await answerService.createAnswer(questionId, {answeredBy, answer});

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  
  const questions = await questionService.getAllQuestions();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const questionId = Number(req.params.id);

  const question  = await questionService.getQuestionById(questionId);

  res.status(200).send(question);
}
