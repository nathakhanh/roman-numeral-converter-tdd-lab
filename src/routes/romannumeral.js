const express = require("express");
const { convert } = require("../utils/romannumeralconverter");

const romanNumeralRoutes = () => {
    const router = express.Router();

    router.get("/converter/roman/decimal/:symbols", (req, res) => {
        let romanNumeral = req.params.symbols
        let result = convert(romanNumeral);

        res.json(result);
    });

    return router;
}

module.exports = {
    romanNumeralRoutes
}