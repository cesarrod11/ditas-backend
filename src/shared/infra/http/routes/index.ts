import { Router } from 'express';

import providersRouter from 'dist/modules/appointments/infra/http/routes/providers.routes';
import usersRouter from 'dist/modules/users/infra/routes/http/users.routes';
import sessionsRouter from 'dist/modules/users/infra/routes/http/sessions.routes';
import passwordRouter from 'dist/modules/users/infra/routes/http/password.routes';
import profileRouter from 'dist/modules/users/infra/routes/http/profile.routes';
import appointmentsRouter from 'dist/modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/providers', providersRouter);

export default routes;
