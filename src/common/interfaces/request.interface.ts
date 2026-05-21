import { IUser } from "./user.interface";

// export interface Request {
//     user :IUser;

// }
// re-open
declare module "express-serve-static-core" {
    export interface Request {
        user: IUser;
    }

}