const app = require('./api');

const PORT = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
