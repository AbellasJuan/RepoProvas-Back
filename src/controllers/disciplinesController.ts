import { Request, Response } from "express";
import { Discipline } from "@prisma/client";
// import { Category, Test, Teacher, Term, Discipline, TeacherDiscipline } from "@prisma/client";

export async function findDisciplinesByTermId(req: Request, res: Response){
  const disciplines: Discipline[] = await disciplinesService.findByTerm();

  res.status(200).send(disciplines);
};