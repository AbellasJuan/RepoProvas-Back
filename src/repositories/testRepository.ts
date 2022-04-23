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

async function findCategoryName(categoryId: number){
  return prisma.category.findUnique({
    where: {
     id: categoryId
   }
 });
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
  const teacherId = await prisma.teacher.findFirst({
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



export default {
  // findCategories,
  findTeacherId,
  findCategoryName,
  findTestsByCategoryId,
  findTestsByTeacherDiscipline
};