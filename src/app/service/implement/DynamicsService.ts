import { Dynamics } from '../../entity/dynamics';
import { IDynamicsService } from '../IDynamicsService';

import axios from 'axios';
import FormData from 'form-data';

export class DynamicsService implements IDynamicsService {
  async token(dynamics: Dynamics): Promise<string> {
    const formData = new FormData();
    formData.append('grant_type', dynamics);
    formData.append('client_id', dynamics.clientId);
    formData.append('client_secret', dynamics.clienteSecret);
    formData.append('scope', dynamics.scope);
    formData.append('resource', dynamics.resource);
    const request = await axios({
      method: 'POST',
      url: '',
      data: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const response = await request.data.access_token;
    return response;
  }
  async request(
    params: IDynamicsService.Request.Params,
  ): Promise<IDynamicsService.Request.Result> {
    let newArray = [];
    const url = `${params.dynamics.urlBase}/contacts?$select=contactid,fullname,mobilephone,${params.dynamics.sql}&$filter=${params.dynamics.sql} ne 229550000 and ${params.dynamics.sql}  ne null and cr547_optin ne 229550002 and cr547_optin ne null`;
    let request = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${params.token}`,
      },
    });
    let { data } = await request;
    newArray.push(data.value);
    while (data['@odata.nextLink']) {
      request = await axios({
        method: 'GET',
        url: data['@odata.nextLink'],
        headers: {
          'Content-Type': 'aplication/json',
          Authorization: `Bearer ${params.token}`,
        },
      });
      data = await request.data;
      newArray.push(data.value);
    }
    return newArray[0];
  }
}
