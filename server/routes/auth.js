const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateAdmin, currentAdmin } = require("../controllers/auth");

router.post("/create-or-update-admin", authCheck, createOrUpdateAdmin);
router.post("/current-admin", authCheck, currentAdmin);

module.exports = router;