import { getData, postData } from ".";


type LoginRequest = {
  email: string;
  password: string;
}


type LoginResponse = {
  message: string,
  verified:boolean,
  verifiedEmail: boolean,
  verifiedPhone: boolean,
  forceChangePassword: boolean
  userVerificationCriteria: "NO_VERIFICATION" | "EITHER_PHONE_OR_EMAIL" | "BOTH_PHONE_AND_EMAIL" | "ONLY_PHONE" | "ONLY_EMAIL";
};

type LogoutResponse={
  message:string
}


 
async function loginService(loginRequest: LoginRequest): Promise<LoginResponse> {
  return postData<LoginResponse>('/login', loginRequest);
}

async function logoutService(): Promise<LogoutResponse> {
  return getData<LogoutResponse>('/logout');
}


export { loginService,logoutService};
