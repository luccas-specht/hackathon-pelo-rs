import type { Express } from 'express';

import type { RouterConfig } from '../interface/router-config';

export default function mapRoutes(app: Express, routes: RouterConfig[]) {
    for (const route of routes) {        
        app.use(route.path, route.module);
    }

    return app;
}
