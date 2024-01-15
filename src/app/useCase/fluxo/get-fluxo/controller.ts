import { Request, Response } from 'express';
import { GetFluxoUseCase } from './usecase';

export class GetFluxoController {
  constructor(private readonly usecase: GetFluxoUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const data = await this.usecase.execute({ id });
      if (!data)
        return response
          .status(200)
          .json({ statusCode: 200, message: 'register not found.' });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(200)
        .json({ statusCode: 200, message: error.message });
    }
  }
}
