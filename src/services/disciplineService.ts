

// async function insertUser(createUserData: CreateUserData) {
//   const existingUser = await userRepository.findByEmail(createUserData.email);
//   if (existingUser)
//     throw { type: "conflict", message: "Users must have unique emails" };

import disciplineRepository from "../repositories/disciplineRepository.js";
import { Discipline } from "@prisma/client";

//   const hashedPassword = bcrypt.hashSync(createUserData.password, 12);

//   await userRepository.insert({ ...createUserData, password: hashedPassword });
// };

// async function signIn({ email, password }: CreateUserData) {
//   const user = await userRepository.findByEmail(email);
//   if (!user) throw { type: "unauthorized", message: "Invalid credentials" };

//   const isPasswordValid = bcrypt.compareSync(password, user.password);
//   if (!isPasswordValid)
//   throw { type: "unauthorized", message: "Invalid credentials" };

//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
//   return token;
// };

// async function findById(id: number) {
//   const user = await userRepository.findById(id);
//   if (!user) throw { type: "not_found" };

//   delete user.password;
//   return user;
// };

async function findByTerm(termId: number){
  const disciplines: Discipline[] = await disciplineRepository.findDisciplines(termId);
  if(!disciplines) throw { type: "not_found" };

  return disciplines;
}

export default {
  // insertUser,
  // signIn,
  // findById,
  findByTerm
};