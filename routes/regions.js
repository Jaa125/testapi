const router = require("express").Router();
const Regi = require("../models/Region");


// router.post("/", async (req, res) => {
//     const newCat = new Category(req.body);
//     try{
//         const savedCat = await newCat.save();
//         res.status(200).send(savedCat);
//     }catch(err) {
//         res.status(500).json(err)
//     }
// })
//Get act
router.get("/", async (req, res) => {

    try{
        const reg = await Regi.find()
        res.status(200).send(reg);
        console.log("region", reg)
    }catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router