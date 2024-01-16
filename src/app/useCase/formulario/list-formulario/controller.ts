import { Request, Response } from 'express';
import { ListFormularioUseCase } from './usecase';

export class ListFormularioController {
  constructor(private readonly usecase: ListFormularioUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.usecase.execute();
      if (data.length === 0)
        return response
          .status(200)
          .json({ statusCode: 200, message: 'nenhum cadastro realizado.' });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
