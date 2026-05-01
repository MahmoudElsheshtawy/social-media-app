"use strict";
//dependency injection design pattern
//singleton design pattern
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    return AuthService;
}());
exports.default = new AuthService(); //singleton design pattern one instance of this class will be created and shared across the application
