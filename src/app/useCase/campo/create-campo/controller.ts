import { Request, Response } from 'express';
import { CreateCampoUseCase } from './usecase';

export class CreateCampoController {
  constructor(private readonly usecase: CreateCampoUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['nome', 'formularioId'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { nome, formularioId } = request.body;
    try {
      const data = await this.usecase.execute({ nome, formularioId });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
