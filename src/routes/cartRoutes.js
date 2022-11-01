// Te dejo un tip por si te sirve.
// Si se que solo voy a utilizar expres para invocar a Router(), lo hago en una linea
import { Router } from "express";
import { createCart, deleteCart, getCartProducts, addProductToCart, deleteProductFromCartList} from '../controller/productController.js';
import adminCheck from "../middleware/adminCheck.js";

const router = require('express').Router()
const { createCart, deleteCart, getCartProducts, addProductToCart, deleteProductFromCartList } = require('../controller/cartController');

router.post('/', createCart )

router.delete('/:id', deleteCart )

router.get('/:id/productos', getCartProducts)

router.post('/:id/productos', addProductToCart)

router.delete('/:id/productos/:id_prod', deleteProductFromCartList)
// Si qrs aplicar un middleware, seria asi ====> router.post('/', adminCheck , createCart )

/*
    -----------------------------------
    te dejo para que reniegues jaja pasa el resto de las funciones al archivo controller. Y las de product tambien.
    presta atencion a las expotaciones e importaciones.
    En lo que te pueda dar una mano, no dudes en escribir!
    -----------------------------------
*/

module.exports = router;
