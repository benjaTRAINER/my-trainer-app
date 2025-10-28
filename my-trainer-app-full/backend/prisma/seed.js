import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){
  console.log('Seeding...');
  // Create trainer
  const trainer = await prisma.user.upsert({
    where: { email: 'trainer@example.com' },
    update: {},
    create: { name: 'Entrenador Demo', email: 'trainer@example.com', passwordHash: '$2b$10$abcdefghijklmnopqrstuv', role: 'trainer' }
  });
  // Create student
  const student = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: { name: 'Alumno Demo', email: 'student@example.com', passwordHash: '$2b$10$abcdefghijklmnopqrstuv', role: 'student' }
  });
  // Exercises
  const ex1 = await prisma.exercise.upsert({ where: { name: 'Sentadilla' }, update: {}, create: { name: 'Sentadilla', muscleGroup: 'Piernas', imageUrl: 'https://i.imgur.com/8Km9tLL.png' } });
  const ex2 = await prisma.exercise.upsert({ where: { name: 'Press de banca' }, update: {}, create: { name: 'Press de banca', muscleGroup: 'Pecho', imageUrl: 'https://i.imgur.com/0y0YQ2S.png' } });
  // Meal Plan sample
  const mp = await prisma.mealPlan.create({
    data: {
      trainerId: trainer.id,
      studentId: student.id,
      title: 'Plan de ejemplo - 7 días',
      days: { create: [ { day: 1, meals: JSON.stringify([{time:'08:00', name:'Desayuno', foods:[{name:'Avena', kcal:250, protein:8, carbs:45, fat:4}]}]) } ] }
    }
  });
  console.log('Seeding done');
}
main().catch(e => { console.error(e); process.exit(1); }).finally(()=> process.exit());
