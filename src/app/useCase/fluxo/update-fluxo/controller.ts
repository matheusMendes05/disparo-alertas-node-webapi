import { UpdateFluxoUseCase } from './usecase';
import { Request, Response } from 'express';

export class UpdateFluxoController {
  constructor(private readonly usecase: UpdateFluxoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, nome, status, flowId } = request.body;
    if (!id)
      return response
        .status(400)
        .json({ statusCode: 400, message: 'Missing param id' });
    try {
      const data = await this.usecase.execute({
        id,
        nome,
        status,
        flowId,
      });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
