import { Request, Response } from 'express';
import { CreateDynamicsUseCase } from './usecase';

export class CreateDynamicsController {
  constructor(private readonly usecase: CreateDynamicsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {}
}
