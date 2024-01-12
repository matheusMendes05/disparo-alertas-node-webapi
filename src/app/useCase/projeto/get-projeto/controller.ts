import { Request, Response } from 'express';
import { GetProjetoUseCase } from './usecase';

export class GetProjetoController {
  constructor(private readonly usecase: GetProjetoUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    if (!id)
      return response
        .status(400)
        .json({ statusCode: 400, message: 'Missing param id' });

    try {
      const data = await this.usecase.execute({ id });
      if (data !== null)
        return response.status(200).json({ statusCode: 200, data: data });
      return response
        .status(200)
        .json({ statusCode: 200, message: 'Projeto não encontrado' });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
