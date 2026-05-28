import express from 'express';

import authRoutes from '../../modules/v1/auth/auth.routes.js';

const router = express.Router();


//
// MODULE ROUTES
//

const routes = [

    authRoutes

];


//
// AUTO REGISTER ROUTES
//

routes.forEach((route) => {

    router.use(route.path, route.router);

});

export default router;