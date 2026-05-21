"use strict";
//dependency injection design pattern
//singleton design pattern
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (signupDTO) {
        //1 check if user already exists
        //2 hash the password
        //3 encrypt the phone number
        //4 send OTP to the user
        //5 send verification email to the user
        //6 create user into redis cache with a TTL of 5 minutes
        //7 save the user to the database
    };
    AuthService.prototype.login = function (loginDTO) { };
    AuthService.prototype.forgetPassword = function (forgetPasswordDTO) { };
    // sendOTP( sendOTPDTO: SendOTPDTO ) { }
    // verifyAccount( verifyAccountDTO: VerifyAccountDTO ) { }
    AuthService.prototype.resetPassword = function (resetPasswordDTO) {
        //  remove the user from redis
        // create into database
    };
    return AuthService;
}());
exports.default = new AuthService(); //singleton design pattern one instance of this class will be created and shared across the application
