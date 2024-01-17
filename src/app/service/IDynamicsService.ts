import { Dynamics } from '../entity/dynamics';

export interface IDynamicsService {
  token(
    dynamics: IDynamicsService.Token.Params,
  ): Promise<IDynamicsService.Token.Result>;
  request(
    params: IDynamicsService.Request.Params,
  ): Promise<IDynamicsService.Request.Result>;
}

export namespace IDynamicsService {
  export namespace Token {
    export type Params = Dynamics;
    export type Result = string;
  }

  export namespace Request {
    export type Params = { token: string; dynamics: Dynamics };
    export type Result = string[];
  }
}
