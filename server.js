const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));  
app.use(express.json());  


app.post('/sumar', (req, res) => {
    const { matriz1, matriz2 } = req.body;

    if (!matriz1 || !matriz2) {
        return res.status(400).json({ error: "Se deben enviar dos matrices." });
    }

    const resultado = matriz1.map((row, i) => 
        row.map((val, j) => val + matriz2[i][j])
    );

    res.json({ resultado });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
