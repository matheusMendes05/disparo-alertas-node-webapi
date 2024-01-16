import { Request, Response } from 'express';
import { ListCampoUseCase } from './usecase';

export class ListCampoController {
  constructor(private readonly usecase: ListCampoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.usecase.execute();

      if (data.length === 0)
        return response
          .status(200)
          .json({ statusCode: 200, message: 'sem Campos cadastrados.' });

      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
