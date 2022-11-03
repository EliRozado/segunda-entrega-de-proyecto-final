import { Router } from "express";
import { createCart, deleteCart, getCartProducts, addProductToCart, deleteProductFromCart } from '../controller/cartController.js';

const router = Router()

router.post('/', createCart )

router.delete('/:id', deleteCart )

router.get('/:id/productos', getCartProducts)

router.post('/:id/productos', addProductToCart)

router.delete('/:id/productos/:id_prod', deleteProductFromCart)

export default router;
