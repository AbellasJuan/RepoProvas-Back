import { prisma } from "../database.js";

async function findAllTerms(){
 return  prisma.term.findMany();
};

export default {
  findAllTerms
};