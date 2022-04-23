import { Category, Teacher, Test } from "@prisma/client";
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

  let result = [];
  let testsByCategoriesWithTeacherName = [];

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    result.push(await testRepository.findTeacherId(test.teacherDisciplineId))

    testsByCategoriesWithTeacherName = [ ...testsByCategoriesWithTeacherName, { ...test , 'teacherName': result[i].name } ] 
  };

  const testsByCategories = [ { category: categoryData.name, tests: testsByCategoriesWithTeacherName } ]

  return testsByCategories;
};


export default {
  findTestsByCategoryId,
  findTestsByTeacherDiscipline
};