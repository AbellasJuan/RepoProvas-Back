import { prisma } from "../database.js";

async function findDisciplines(termId: number){
 return prisma.discipline.findMany({
   where: {
     termId: termId
   }
 });
};

export default {
  findDisciplines
};