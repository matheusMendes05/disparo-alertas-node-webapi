import { Request, Response } from 'express';
import { CreateValorUseCase } from './usecase';

export class CreateValorController {
  constructor(private readonly usecase: CreateValorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['valor', 'campoId'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { valor, campoId } = request.body;
    try {
      const data = await this.usecase.execute({ valor, campoId });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
