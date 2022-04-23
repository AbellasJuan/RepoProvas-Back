import { Request, Response } from "express";
import { Term } from "@prisma/client";
import termService from "../services/termService.js";
// import { Category, Test, Teacher, Term, Discipline, TeacherDiscipline } from "@prisma/client";

export async function findAll(req: Request, res: Response){
  const terms: Term[] = await termService.findAll();

  res.status(200).send(terms);
};