import { Request, Response } from 'express';
import { CreateZenviaUseCase } from './usecase';

export class CreateZenviaController {
  constructor(private readonly usecase: CreateZenviaUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = ['urlBase', 'xApiToken'];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }
    const { urlBase, xApiToken } = request.body;
    try {
      const data = await this.usecase.execute({ urlBase, xApiToken });
      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
