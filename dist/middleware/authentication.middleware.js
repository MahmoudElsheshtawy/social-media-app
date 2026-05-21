"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var isAuthenticated = function (req, res, next) {
    // get authorization header from the request
    // check if the token is valid
    // check if the user info is present in the database
    // inject the user info into the request object
    // if everything is fine call next() to pass the control
    var user = {
        userName: "john_doe",
        email: "    "
    };
    req.user = user;
    req.headers["authorization"] = "Bearer token";
    next();
};
exports.isAuthenticated = isAuthenticated;
