import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger/user.json' assert { type: "json" };
import routes from './routes/index.js';
import db from './config/connectionUser.js';

db.on("error", console.log.bind(console, 'error de conexão'));
db.once("open", () => {
  console.log("Conexão aberta");
})

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.json());

routes(app);

export default app
