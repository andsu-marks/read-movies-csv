import prisma from "@/utils/prisma";

export class MoviesRepository {
  public async findProducerWithGreatestRange() {
    return prisma.movie.findMany({
      select: { producers:true }
    })
    
  }
} 