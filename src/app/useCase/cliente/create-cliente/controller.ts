import { Request, Response } from 'express';
import { CreateClienteUseCase } from './usecase';

export class CreateClienteController {
  constructor(private readonly usecase: CreateClienteUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;
    if (!nome) {
      return response
        .status(400)
        .json({ statusCode: 400, message: 'Missing parameter nome' });
    }

    try {
      const data = await this.usecase.execute({ nome, status });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
