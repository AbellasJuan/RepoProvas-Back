import { prisma } from "../database.js";
import { User } from '@prisma/client';

export type CreateUserData = Omit<User, "id">;

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    },
  });
}

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function insert(createUserData: CreateUserData) {
  await prisma.user.create({
    data: createUserData
  });
}

async function findAllUsers(){
 return await prisma.user.findMany();
};

export default {
  findByEmail,
  insert,
  findById,
  findAllUsers
};
