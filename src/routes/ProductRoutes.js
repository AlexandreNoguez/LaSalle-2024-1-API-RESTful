const express = require("express");
const router = express.Router();

const {
    create,
    list,
    findById,
    update,
    remove
} = require("../controllers/ProductController")

router.post("/", create);
router.get("/", list);
router.get("/:id", findById)
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;