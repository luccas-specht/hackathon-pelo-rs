import type { RouterConfig } from '../interface/router-config';

import { benefitController } from './benefit.controller';
import { shelterController } from './shelter.controller';
import { volunteerController } from './volunteer.controller';
import { oabController } from './oab.controller';

const controllers: RouterConfig[] = [
    { path: '/benefit', module: benefitController },
    { path: '/volunteer', module: volunteerController },
    { path: '/shelter', module: shelterController },
    { path: '/oab', module: oabController },
];

export default controllers;
