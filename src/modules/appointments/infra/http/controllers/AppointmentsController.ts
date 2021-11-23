import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {

    const user_id = request.user.id;
    const {
      provider_id,
      date,
      period,
      task_type,
      customer_address,
      amount,
      payment_method,
      note,
    } = request.body;
    const masked_number = request.body.masked_number.replace(/\d(?=\d{4})/g, "*")

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date,
      period,
      provider_id,
      user_id,
      task_type,
      customer_address,
      amount,
      payment_method,
      masked_number,
      note,
    });

    return response.json(appointment);
  }
}
