import express from "express"
import morgan from "morgan"
import { fileURLToPath } from "url"
import path from "path"


const app = express()
const Port = 4000

app.use(morgan("dev"))
app.use(express.json())
app.use(express.static('./'));

app.use(express.static('public'));  
app.use(express.json());  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname))); 

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


app.listen(Port, () => {
    console.log(`Servidor corriendo en http://localhost:${Port}`);
});
