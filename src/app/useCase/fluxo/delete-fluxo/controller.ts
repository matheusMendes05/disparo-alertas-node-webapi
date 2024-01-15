import { Request, Response } from 'express';
import { DeleteFluxoUseCase } from './usecase';

export class DeleteFluxoController {
  constructor(private readonly usecase: DeleteFluxoUseCase) {}

  async handle(request: Request, respose: Response): Promise<Response> {
    const { id } = request.params;
    if (!id)
      return respose
        .status(400)
        .json({ statusCode: 400, message: 'Missing parameter id' });
    try {
      await this.usecase.execute({ id });
      return respose.status(200).json({
        statusCode: 200,
        message: 'Registro exluido com sucesso.',
      });
    } catch (error) {
      return respose
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
