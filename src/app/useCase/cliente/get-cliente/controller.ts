import { Request, Response } from 'express';
import { GetClienteUseCase } from './usecase';

export class GetClienteController {
  constructor(private readonly usecase: GetClienteUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const data = await this.usecase.execute({ id });

      if (data !== null)
        return response.status(200).json({ statusCode: 200, data: data });

      return response
        .status(200)
        .json({ statusCode: 200, message: 'cliente não encontrado' });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
