import { Request, Response } from 'express';
import { ListClienteUseCase } from './usecase';

export class ListClienteController {
  constructor(private readonly usecase: ListClienteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.usecase.execute();

      if (data.length === 0)
        return response
          .status(200)
          .json({ statusCode: 200, message: 'sem clientes cadastrados.' });

      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
