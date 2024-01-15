import { Request, Response } from 'express';
import { UpdateDynamicsUseCase } from './usecase';

export class UpdateDynamicsController {
  constructor(private readonly usecase: UpdateDynamicsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      urlBase,
      urlContacts,
      clientId,
      clienteSecret,
      scope,
      resource,
      sql,
    } = request.body;

    if (!id)
      return response
        .status(400)
        .json({ statusCode: 400, message: 'Missing param id' });
    try {
      const data = await this.usecase.execute({
        id,
        urlBase,
        urlContacts,
        clientId,
        clienteSecret,
        scope,
        resource,
        sql,
      });

      return response.status(200).json({ statusCode: 200, data: data });
    } catch (error) {
      return response
        .status(500)
        .json({ statusCode: 500, message: error.message });
    }
  }
}
