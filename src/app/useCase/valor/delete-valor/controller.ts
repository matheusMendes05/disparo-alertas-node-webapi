import { Request, Response } from 'express';
import { DeleteValorUseCase } from './usecase';

export class DeleteValorController {
  constructor(private readonly usecase: DeleteValorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    if (!id)
      return response
        .status(400)
        .json({ statusCode: 400, message: 'Missing parameter id' });
    try {
      await this.usecase.execute({ id });
      return response
        .status(200)
        .json({ statusCode: 200, message: 'Registro excluido com sucesso.' });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
