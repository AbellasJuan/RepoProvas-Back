import { prisma } from "../database.js";
import { User } from '@prisma/client';

export type CreateUserData = Omit<User, "id">;

async function insert(createUserData: CreateUserData){
  await prisma.user.create({
    data: createUserData
  });
}

export default {
  insert,
};