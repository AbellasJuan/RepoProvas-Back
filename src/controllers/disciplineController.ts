import { Request, Response } from "express";
import { Discipline } from "@prisma/client";
import disciplineService from "../services/disciplineService.js";
// import { Category, Test, Teacher, Term, Discipline, TeacherDiscipline } from "@prisma/client";

export async function findDisciplinesByTermId(req: Request, res: Response){
  const { termId } = req.params;

  const disciplines: Discipline[] = await disciplineService.findByTerm(Number(termId));

  res.status(200).send(disciplines);
};