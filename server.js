const express = require('express');
const path = require('path');
const app = express();
const PORT = 3010;

// Servir archivos estáticos desde el directorio raíz
app.use(express.static(__dirname));

// Rutas para cada página
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/qr', (req, res) => {
    res.sendFile('qr.html', { root: __dirname });
});

app.get('/calculadora', (req, res) => {
    res.sendFile('calculadora.html', { root: __dirname });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
