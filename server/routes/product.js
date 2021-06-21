const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const { create, listAll, remove, read, update,list, productsCount } = require("../controllers/product");

// routes
router.post("/product", authCheck,  create);
router.get("/products/:count", listAll);
router.get("/product/:slug", read);
router.delete("/product/:slug", authCheck, remove)
router.put("/product/:slug", authCheck, update);

router.post("/products", list);
router.get("/products/total", productsCount);

module.exports = router;
