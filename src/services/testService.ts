import { Category, Test } from "@prisma/client";
import testRepository from "../repositories/testRepository.js";


async function findTestsByTeacherDiscipline(teacherDisciplineId: number){
  const tests: Test[] = await testRepository.findTestsByTeacherDiscipline(teacherDisciplineId);
  if(!tests) throw { type: "not_found" };
  return tests;
}

async function findTestsByCategoryId(categoryId: number){
  const tests: Test[] = await testRepository.findTestsByCategoryId(categoryId);

  const categoryData: Category = await testRepository.findCategoryName(categoryId);

  if(!tests) throw { type: "not_found" };
  if(!categoryData) throw { type: "not_found" };

  const testsByCategories = [ categoryData.name, [ ...tests] ]

  return testsByCategories;
}


export default {
  findTestsByCategoryId,
  findTestsByTeacherDiscipline
};