import { Request, Response } from 'express';
import { CreateHistoricoUseCase } from './usecase';

export class CreateHistoricoController {
  constructor(private readonly usecase: CreateHistoricoUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['dataDisparo', 'qtdUsuarios', 'projetoId'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }

    const { dataDisparo, qtdUsuarios, status, projetoId } = request.body;
    try {
      const data = await this.usecase.execute({
        dataDisparo,
        qtdUsuarios,
        status,
        projetoId,
      });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
