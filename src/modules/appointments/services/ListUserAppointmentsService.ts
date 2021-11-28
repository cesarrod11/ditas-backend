import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import { classToClass } from 'class-transformer';
import ICacheUser from '@shared/container/providers/CacheProvider/models/ICacheUser';

interface IRequest {
  user_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListUserAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheUser: ICacheUser,
  ) {}

  public async execute({
    user_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    const cacheKey = `user-appointments:${user_id}:${year}-${month}-${day}`;

    // let appointments = await this.cacheProvider.recover<Appointment[]>(
    //   cacheKey,
    // );

    let appointments = null;

    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllInDayFromUser(
        {
          user_id,
          day,
          month,
          year,
        },
      );
    }

    await this.cacheUser.save(cacheKey, classToClass(appointments));

    return classToClass(appointments);
  }
}

export default ListUserAppointmentsService;
