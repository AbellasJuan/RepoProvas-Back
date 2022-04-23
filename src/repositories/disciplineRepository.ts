import { prisma } from "../database.js";

// export type CreateUserData = Omit<User, "id">;

// async function findByEmail(email: string){
//   return prisma.user.findUnique({
//     where: {
//       email
//     },
//   });
// }

// async function findById(id: number){
//   return prisma.user.findUnique({
//     where: {
//       id,
//     },
//   });
// }

// async function insert(createUserData: CreateUserData){
//   await prisma.user.create({
//     data: createUserData
//   });
// }

async function findDisciplines(termId: number){
 return prisma.discipline.findMany({
   where: {
     termId: termId
   }
 });
};

export default {
  // findByEmail,
  // insert,
  // findById,
  findDisciplines
};