import { prisma } from "../database.js";

async function findCategoryName(categoryId: number){
  return prisma.category.findUnique({
    where: {
     id: categoryId
   }
 });
};

async function findTestsByTeacherId(teacherId: number){
  const testByTeacher = await prisma.test.findMany({    
    select: {
      id: true,
      name: true,
      pdfUrl: true,
      year: true,

      category: { 
        select: { 
          name: true 
        },
      },
    
      teacherDiscipline: {
        select:{ 
          teacher: { 
            select: {
              name: true
            },
          },
          discipline: { 
            select: { 
              name: true,
              term: {
                select: {
                  number: true
                },
              },
            },
          },        
        },
      },
    },
    where: { 
      teacherDiscipline: {
        teacher:{
          id: teacherId
        }
      },
    },
    orderBy:{
      categoryId: 'asc'
    }
    
  });

 return testByTeacher
};

async function findTestsByTerm(termId: number){
  const testsByTerm = await prisma.test.findMany({    
    select: {
      id: true,
      name: true,
      pdfUrl: true,
      year: true,

      category: { 
        select: { 
          name: true 
        },
      },
    
      teacherDiscipline: {
        select:{ 
          teacher: { 
            select: {
              name: true
            },
          },
          discipline: { 
            select: { 
              name: true,
              term: {
                select: {
                  number: true
                },
              },
            },
          },        
        },
      },
    },
    where: { 
      teacherDiscipline: {
        discipline: {
          term: {
            id: termId
          }
        }
      },
    },
    orderBy:{
      categoryId: 'asc'
    }
    
  });

 return testsByTerm
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
  findTeacherId,
  findCategoryName,
  findTestsByTerm,
  findTestsByTeacherId
};