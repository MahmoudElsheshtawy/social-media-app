"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.post("/signup", function (req, res, next) {
    // callservice logic for signup here
    // authService.signup(req.body)
    // res.send("Signup endpoint");
});
exports.default = router;
