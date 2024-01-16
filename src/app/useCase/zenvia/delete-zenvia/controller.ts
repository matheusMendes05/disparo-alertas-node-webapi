import { Request, Response } from 'express';
import { DeleteZenviaUseCase } from './usecase';

export class DeleteZenviaController {
  constructor(private readonly usecase: DeleteZenviaUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
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
