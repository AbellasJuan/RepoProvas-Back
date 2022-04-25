import disciplineRepository from "../repositories/disciplineRepository.js";
import { Discipline } from "@prisma/client";

async function findByTerm(termId: number){
  const disciplines: Discipline[] = await disciplineRepository.findDisciplines(termId);
  if(!disciplines) throw { type: "not_found" };

  return disciplines;
}

export default {
  findByTerm
};