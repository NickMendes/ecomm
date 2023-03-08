import express from 'express';
import swaggerUi from 'swagger-ui-express';
import db from './config/connectionProduct.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const swaggerDoc = require('../swagger/products.json');

import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'error de conexão'));
db.once('open', () => {
    console.log('Conexão aberta');
});

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.json());

routes(app);

export default app;
