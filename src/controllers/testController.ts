import { Request, Response } from "express";
import { Test } from "@prisma/client";
import testService from "../services/testService.js";
// import { Category, Test, Teacher, Term, Discipline, TeacherDiscipline } from "@prisma/client";

export async function findTestsByTerm(req: Request, res: Response){
  const { termId } = req.params;
  const tests = await testService.findTestsByTerm(Number(termId));
  res.status(200).send(tests);
};

export async function findTestsByTeacherId(req: Request, res: Response){
  const { teacherId } = req.params;
  const tests = await testService.findTestsByTeacherId(Number(teacherId));
  res.status(200).send(tests);
};