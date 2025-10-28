import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createMealPlan(req, res){
  try {
    const { studentId, title, days } = req.body; // days: [{day:1, meals:[{time, name, foods:[{name, kcal, protein, carbs, fat}]}]}]
    const mp = await prisma.mealPlan.create({
      data: {
        trainerId: req.user.userId,
        studentId,
        title,
        days: { create: days }
      },
      include: { days: true }
    });
    res.json(mp);
  } catch(e){
    console.error(e);
    res.status(500).json({ error: 'Error creando plan' });
  }
}

export async function getMealPlansForStudent(req, res){
  try {
    const studentId = Number(req.params.id);
    const list = await prisma.mealPlan.findMany({
      where: { studentId },
      include: { days: true }
    });
    res.json(list);
  } catch(e){
    console.error(e);
    res.status(500).json({ error: 'Error listando planes' });
  }
}
