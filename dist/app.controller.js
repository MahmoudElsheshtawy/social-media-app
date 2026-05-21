"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
var express_1 = __importDefault(require("express"));
var modules_1 = require("./modules");
var common_1 = require("./common");
function bootstrap() {
    var app = (0, express_1.default)();
    var port = 3000;
    app.use(express_1.default.json());
    // Import and use the auth router
    app.use('/auth', modules_1.authRouter);
    // global error handler
    app.use(function (error, req, res, next) {
        return res.status(error.cause || 500).json({
            message: error.message,
            success: false,
            stack: error.stack,
            details: error instanceof common_1.BadRequestException ? error.details : undefined
        });
    });
    app.listen(port, function () { return console.log("app listening on port ".concat(port, "!")); });
}
exports.bootstrap = bootstrap;
