import { Request, Response } from 'express';
import { CreateFluxoUseCase } from './usecase';

export class CreateFluxoController {
  constructor(private readonly usecase: CreateFluxoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['projetoId', 'nome', 'status', 'flowId'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { projetoId, nome, status, flowId } = request.body;
    try {
      const data = await this.usecase.execute({
        projetoId,
        nome,
        status,
        flowId,
      });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
