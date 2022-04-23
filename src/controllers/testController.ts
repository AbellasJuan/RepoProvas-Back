import { Request, Response } from "express";
import { Test } from "@prisma/client";
import testService from "../services/testService.js";
// import { Category, Test, Teacher, Term, Discipline, TeacherDiscipline } from "@prisma/client";

export async function findTestsByTeacherDiscipline(req: Request, res: Response){

  const { teacherDisciplineId } = req.params;

  const tests = await testService.findTestsByTeacherDiscipline(Number(teacherDisciplineId));

  res.status(200).send(tests);
};

export async function findTestsByCategoryId(req: Request, res: Response){

  const { categoryId } = req.params;

  const tests = await testService.findTestsByCategoryId(Number(categoryId));

  res.status(200).send(tests);
};