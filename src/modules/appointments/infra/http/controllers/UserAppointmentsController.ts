import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUserAppointmentsService from '@modules/appointments/services/ListUserAppointmentsService';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.body.user_id;
    const { day, month, year } = request.query;

    const listUserAppointments = container.resolve(
      ListUserAppointmentsService,
    );

    const appointments = await listUserAppointments.execute({
      user_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    return response.json(appointments);
  }
}
