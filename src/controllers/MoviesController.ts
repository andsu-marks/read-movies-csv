import { Response, Request } from "express";
import ProducerWithGreatestRangeService from "@/useCases/ProducerWithGreatestRangeService";

export class MoviesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const producerWithGreatestRangeService = new ProducerWithGreatestRangeService();
    const producers = await producerWithGreatestRangeService.execute();
    return response.json(producers);
  }
}