import { Request, Response } from "express";

import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  const {askedBy, question} = req.body;

  await questionService.insert({askedBy, question});

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy, answer} = req.body;
  const {id} = req.params;

  await answerService.insert(Number(id), {answeredBy, answer});

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
