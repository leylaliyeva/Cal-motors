const express = require(`express`);

const router = express.Router()

router.get("/admin",(req, res)=>{
    res.json({
        data:"admin api API "
    });
});

module.exports=router;