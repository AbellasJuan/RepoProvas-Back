import { prisma } from "../database.js";

async function findByEmail(email: string){
  return prisma.user.findUnique({
    where: {
      email
    },
  });
}

async function findById(id: number){
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function findAllUsers(){
 return await prisma.user.findMany();
};

export default {
  findByEmail,
  findById,
  findAllUsers
};