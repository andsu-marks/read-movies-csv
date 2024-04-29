import { MoviesRepository } from "@/repositories/MoviesRepository";

export default class ProducerWithGreatestRangeService {
  public async execute() {
    const moviesRepository = new MoviesRepository();
    const producers = await moviesRepository.findProducerWithGreatestRange();

    return producers;
  }
}