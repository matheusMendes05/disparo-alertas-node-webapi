import { Request, Response } from 'express';
import { UpdateClienteUseCase } from './usecase';
import { ClienteModel } from '../../../models/cliente';

export class UpdateClienteController {
  constructor(private readonly usecase: UpdateClienteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, nome, status } = request.body;

    if (!id)
      return response
        .status(200)
        .json({ statusCode: 200, message: 'Missing parameter id' });

    const cliente = new ClienteModel({
      id,
      nome,
      status,
    });
    try {
      const data = await this.usecase.execute(cliente);
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
