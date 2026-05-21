import type{ NextFunction, Request, Response } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

// get authorization header from the request
// check if the token is valid
// check if the user info is present in the database
// inject the user info into the request object
// if everything is fine call next() to pass the control
let user = {
    userName: "john_doe",
    email: "    "
}
req.user = user
req.headers["authorization"] = "Bearer token"
next()
}