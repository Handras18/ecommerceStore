import express from "express";
import {
  addToCart,
  getCartProduct,
  removeAllFromCart,
  updateQuantity,
} from "../controllers/cart.controller";

const router = express.Router();

router.get("/", protectRoute, getCartProduct);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);

export default router;
