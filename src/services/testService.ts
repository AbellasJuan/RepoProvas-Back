import { Test } from "@prisma/client";
import testRepository from "../repositories/testRepository.js";


async function findTestsByTeacherDiscipline(teacherDisciplineId: number){
  const tests: Test[] = await testRepository.findTestsByTeacherDiscipline(teacherDisciplineId);
  if(!tests) throw { type: "not_found" };
  return tests;
}

async function findTestsByCategoryId(categoryId: number){
  const tests: Test[] = await testRepository.findTestsByCategoryId(categoryId);
  if(!tests) throw { type: "not_found" };
  return tests;
}


export default {
  // insertUser,
  // signIn,
  // findById,
  findTestsByCategoryId,
  findTestsByTeacherDiscipline
};