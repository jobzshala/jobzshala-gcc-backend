import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/index';
import swaggerSpec from './config/swagger';
import { apiLimiter } from './shared/middleware/rateLimit.middleware';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiLimiter);

app.use('/api', routes);


//
// SWAGGER DOCS
//

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);



//
// HEALTH API
//

app.get('/api/health', (req, res) => {

    res.json({

        status: true,

        message: 'API Running'

    });

});


export default app;