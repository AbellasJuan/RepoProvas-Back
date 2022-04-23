import { Teacher, TeacherDiscipline, Test } from "@prisma/client";
import { prisma } from "../database.js";

async function findTestsByCategoryId(categoryId: number){
  const testsByCategoryId = await prisma.test.groupBy({
    by: ["id", "name", "pdfUrl", "categoryId", "teacherDisciplineId"],
    where: {
     categoryId
   }
 });
 return testsByCategoryId
};

async function findTestsByTeacherDiscipline(teacherDisciplineId: number){
  const testsByTeachers = await prisma.test.groupBy({
    by: ["id", "name", "pdfUrl", "categoryId", "teacherDisciplineId"],
    where: {
     teacherDisciplineId
   }
 });
 return testsByTeachers
};

async function findTeacherId(teacherDisciplineId: number){
  const teacherId = await prisma.teacherDiscipline.findFirst({
    where: { 
      id: teacherDisciplineId  
    }
  });
 return teacherId
};

async function findTeacherName(teacherId: number){
  const teacherName = await prisma.teacher.findUnique({
    where: { 
      id: teacherId
    }
  })
 return teacherName;
};


//TESTES FILTRADOS POR PROFS
// async function findTestsByTeacherDiscipline(teacherDisciplineId: number){
//  return prisma.test.groupBy({
//     by: ["id", "name", "pdfUrl", "categoryId", "teacherDisciplineId"],
//     where: {
//      teacherDisciplineId
//    }
//  });
// };

export default {
  // findCategories,
  findTestsByCategoryId,
  findTestsByTeacherDiscipline
};