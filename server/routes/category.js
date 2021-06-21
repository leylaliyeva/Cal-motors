const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const { create, read, update, remove, list, getSubs } = require("../controllers/category");

router.post("/category", authCheck, create)
router.get("/categories", list)
router.get("/category/:slug", authCheck, read)
router.put("/category/:slug", authCheck, update)
router.delete("/category/:slug", authCheck, remove)
router.get("/category/subs/:_id", getSubs)

module.exports = router;