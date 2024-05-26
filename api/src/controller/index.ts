import type { RouterConfig } from '../interface/router-config';

import { benefitController } from './benefit.controller';
import { volunteerController } from './volunteer.controller';

const controllers: RouterConfig[] = [
    { path: '/benefit', module: benefitController },
    { path: '/volunteer', module: volunteerController },
];

export default controllers;
