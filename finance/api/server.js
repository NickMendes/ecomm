const app = require('./api');

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
