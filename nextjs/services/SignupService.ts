import { postData } from ".";
type SignupRequest = {
    name: string;
    email?: string;
    password: string;
    mobileNumber?: string;
  }
 
  
type SignupResponse = {
    message: string;
    verified: boolean;
    userVerificationCriteria: "NO_VERIFICATION" | "EITHER_PHONE_OR_EMAIL" | "BOTH_PHONE_AND_EMAIL" | "ONLY_PHONE" | "ONLY_EMAIL";
  };

async function signupService(signupRequest: SignupRequest): Promise<SignupResponse> {
    return postData<SignupResponse>('/register', signupRequest);
  }
  
export{signupService}  