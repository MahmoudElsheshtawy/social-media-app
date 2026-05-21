

//dependency injection design pattern
//singleton design pattern

import { ForgetPasswordDTO, LoginDTO, ResetPasswordDTO, SendOTPDTO, SignupDTO } from "./auth.dto"



class AuthService {
    constructor() { }
    signup(signupDTO: SignupDTO) { 
        //1 check if user already exists
        //2 hash the password
        //3 encrypt the phone number
        //4 send OTP to the user
        //5 send verification email to the user
        //6 create user into redis cache with a TTL of 5 minutes
        //7 save the user to the database

    }
    login( loginDTO: LoginDTO ) { }
    forgetPassword( forgetPasswordDTO: ForgetPasswordDTO ) { }
    // sendOTP( sendOTPDTO: SendOTPDTO ) { }
    // verifyAccount( verifyAccountDTO: VerifyAccountDTO ) { }
    resetPassword( resetPasswordDTO: ResetPasswordDTO ) {
        //  remove the user from redis
        // create into database
    }

}

export default new AuthService() //singleton design pattern one instance of this class will be created and shared across the application