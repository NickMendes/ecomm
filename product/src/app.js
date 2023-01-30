import express from 'express';
import db from './config/connectionProduct.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'error de conexão'));
db.once("open", () => {
  console.log("Conexão aberta");
})

const app = express();

app.use(express.json())

routes(app);

export default app