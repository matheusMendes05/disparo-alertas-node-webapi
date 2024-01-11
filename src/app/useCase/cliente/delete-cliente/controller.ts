import { Request, Response } from 'express';
import { DeleteClienteUseCase } from './usecase';

export class DeleteClienteController {
  constructor(private readonly usecase: DeleteClienteUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id)
      return response
        .status(200)
        .json({ statusCode: 200, message: 'Missing parameter id' });

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
