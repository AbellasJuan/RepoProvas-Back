import { Category, Teacher, Test } from "@prisma/client";
import testRepository from "../repositories/testRepository.js";


async function findTestsByTerm(termId: number){
  const tests = await testRepository.findTestsByTerm(termId);

  if(!tests) throw { type: "not_found" };

  return tests;
};

async function findTestsByTeacherId(teacherId: number){
  const testsByTeacher = await testRepository.findTestsByTeacherId(teacherId);

  if(!testsByTeacher) throw { type: "not_found" };

  return testsByTeacher;
};


export default {
  findTestsByTerm,
  findTestsByTeacherId
};