import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../../order/swagger/order.json' assert { type: "json" };
import db from './config/connectionOrders.js';
import routes from '../../order/src/routes/index.js';

db.on("error", console.log.bind(console, 'error de conexão'));
db.once("open", () => {
  console.log("Conexão aberta");
})

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.json())

routes(app);

export default app
