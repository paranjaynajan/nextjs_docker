import { postData } from ".";
type OtpRequest = {
    otp?: string[] | string,
    email?: string,
    mobileNumber?: string
    captcha?: string
    otpType?: string
  }
  
  type VerifyOtpRequest = {
    otp?: string[] | string,
    email?: string,
    mobileNumber?: string
  }
  
  type LoginOtpRequest = {
    otp?: string[] | string,
    email?: string,
    rememberMe?:Boolean
    mobileNumber?: string
  }
  type OtpResponse = {
    message: string,
    otpExpiry: string
  }

  type LoginResponse = {
    message: string,
    verified:boolean,
    verifiedEmail: boolean,
    verifiedPhone: boolean,
    forceChangePassword: boolean
    userVerificationCriteria: "NO_VERIFICATION" | "EITHER_PHONE_OR_EMAIL" | "BOTH_PHONE_AND_EMAIL" | "ONLY_PHONE" | "ONLY_EMAIL";
  };
  
type VerifyOtpResponse = {
    message:string
    verified?: boolean;
    userVerificationCriteria?: "NO_VERIFICATION" | "EITHER_PHONE_OR_EMAIL" | "BOTH_PHONE_AND_EMAIL" | "ONLY_PHONE" | "ONLY_EMAIL";
  };

async function loginOtpService(loginRequest: LoginOtpRequest): Promise<LoginResponse> {
    return postData<LoginResponse>('/login-otp', loginRequest);
  }
  
  async function requestotpservice(otpRequest: OtpRequest): Promise<OtpResponse> {

    return postData<OtpResponse>('/send-otp', otpRequest);
  }
  
  async function verifyotpservice(verifyotpRequest: VerifyOtpRequest): Promise<VerifyOtpResponse> {
    return postData<VerifyOtpResponse>('/send-otp',verifyotpRequest);
  }

  export { requestotpservice ,verifyotpservice, loginOtpService};