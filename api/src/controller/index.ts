import type { RouterConfig } from '../interface/router-config';

import { benefitController } from './benefit.controller';
import { shelterController } from './shelter.controller';
import { volunteerController } from './volunteer.controller';

const controllers: RouterConfig[] = [
    { path: '/benefit', module: benefitController },
    { path: '/volunteer', module: volunteerController },
    { path: '/shelter', module: shelterController },
];

export default controllers;
