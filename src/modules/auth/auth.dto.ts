

// mast be none 
// all good with naming convention


export interface  SignupDTO {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    salary: number;
    DOB : Date;
}
export interface  LoginDTO {
    email: string;
    password: string;
}
export interface  ForgetPasswordDTO {
    email: string;
}
export interface  SendOTPDTO {
    phoneNumber: string;
}
export interface VerifyAccountDTO {    
    email: string;
    otp: string;
}
export interface ResetPasswordDTO {
    email: string;
    password: string;
    otp: string;
  
}
