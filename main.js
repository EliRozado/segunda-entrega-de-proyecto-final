import express from 'express';
import cartRouter from './src/routes/cartRoutes.js';
import prodRouter from './src/routes/productRoutes.js'

const app = express();
const port = process.env.Port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/c', cartRouter)
app.use('/p', prodRouter)

app.listen(port, () => {
    console.log(`conectado por ${port}`)
})