import { Router } from "express";
import { getProducts, addProduct, editProduct, deleteProduct } from '../controller/productController.js';
import adminCheck from "../middleware/adminCheck.js";

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProducts)
router.post('/', adminCheck, addProduct)
router.put('/:id', adminCheck, editProduct)
router.delete('/:id', adminCheck, deleteProduct) 

export default router;

