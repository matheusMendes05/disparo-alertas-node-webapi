import { Request, Response } from 'express';
import { ListProjetoUseCase } from './usecase';

export class ListProjetoController {
  constructor(private readonly usecase: ListProjetoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.usecase.execute();
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
