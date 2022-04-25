import { Term } from "@prisma/client";
import termRepository from "../repositories/termRepository.js";

async function findAll(){
  const terms: Term[] = await termRepository.findAllTerms();
  if(!terms) throw { type: "not_found" };

  return terms;
}

export default {
  findAll
};