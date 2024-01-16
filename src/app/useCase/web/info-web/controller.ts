import { Request, Response } from 'express';
import { InfoWebUseCase } from './usecase';

export class InfoWebController {
  constructor(private readonly usecase: InfoWebUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['clienteId', 'projetoId'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { clienteId, projetoId } = request.body;
    try {
      const data = await this.usecase.execute({ clienteId, projetoId });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
