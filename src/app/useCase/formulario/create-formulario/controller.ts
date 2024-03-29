import { Request, Response } from 'express';
import { CreateFormularioUseCase } from './usecase';

export class CreateFormularioController {
  constructor(private readonly usecase: CreateFormularioUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['titulo', 'projetoId'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { titulo, projetoId } = request.body;
    try {
      const data = await this.usecase.execute({ titulo, projetoId });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
