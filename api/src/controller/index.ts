import type { RouterConfig } from "../interface/router-config";

import { benefitController } from "./benefit.controller";

const controllers: RouterConfig[] = [
    { path: '/benefits', module: benefitController}
]

export default controllers;