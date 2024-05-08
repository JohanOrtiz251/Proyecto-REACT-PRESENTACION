const express = require('express');
const cors = require('cors');
const { registrarUsuario, iniciarSesion } = require('./controllers/userController');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.post('/registro', registrarUsuario);
app.post('/login', iniciarSesion);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
