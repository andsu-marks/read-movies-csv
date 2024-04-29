import { PrismaClient } from '@prisma/client';
import parseCSV from './csv/parser';

export async function insertData() {
  const prisma = new PrismaClient();

  try {
    await prisma.movie.deleteMany();

    const filePath = './movielist.csv';
    
    const movies = await parseCSV(filePath);
    console.log(movies)

    for (const movie of movies) {
      await prisma.movie.create({
        data: {
          year: movie.year,
          title: movie.title,
          studios: movie.studios,
          producers: movie.producers,
          winner: movie.winner,
        },
      });
    }

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir os dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}
