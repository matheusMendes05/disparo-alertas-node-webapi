import { Request, Response } from 'express';
import { CreateProjetoUseCase } from './usecase';

export class CreateProjetoController {
  constructor(private readonly usecase: CreateProjetoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['clienteId', 'dynamicsId', 'nome'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { clienteId, dynamicsId, nome, status } = request.body;
    try {
      const data = await this.usecase.execute({
        clienteId,
        dynamicsId,
        nome,
        status,
      });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ sttausCode: 500, message: error.message });
    }
  }
}
