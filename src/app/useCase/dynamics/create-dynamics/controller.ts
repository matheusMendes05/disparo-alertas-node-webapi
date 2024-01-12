import { Request, Response } from 'express';
import { CreateDynamicsUseCase } from './usecase';

export class CreateDynamicsController {
  constructor(private readonly usecase: CreateDynamicsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const requiredFields = [
      'projetoId',
      'urlBase',
      'urlContacts',
      'clientId',
      'clienteSecret',
      'scope',
      'resource',
      'sql',
    ];

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response
          .status(400)
          .json({ statusCode: 400, message: `Missing param ${field}` });
      }
    }

    const {
      projetoId,
      urlBase,
      urlContacts,
      clientId,
      clienteSecret,
      scope,
      resource,
      sql,
    } = request.body;

    try {
      const data = await this.usecase.execute({
        projetoId,
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
