import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';
import swaggerSpec from './config/swagger.js';
import { apiLimiter } from './shared/middleware/rateLimit.middleware.js';
const app = express();
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiLimiter);
//
// API ROUTES
//
app.use('/api', routes);
//
// SWAGGER
//
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default app;
