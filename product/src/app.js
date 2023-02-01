import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger/products.json' assert { type: "json" };
import db from './config/connectionProduct.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'error de conexão'));
db.once("open", () => {
  console.log("Conexão aberta");
})

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.json())

routes(app);

export default app
