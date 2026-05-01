"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.post("/signup", function (req, res, next) {
    // Handle signup logic here
    // /auth/signup
    //1__ call service to create user =>> go to src/services/auth.service.ts 
    //2__ send response to client
    res.send("Signup endpoint");
});
exports.default = router;
