import { postData } from ".";

type ChangePasswordRequest={
    password: string,
    newPassword: string
  }
type ChangePasswordResponse={
   message:string
  }

  type ResetPasswordRequest={
    otp: string
    token:string,
    newPassword: string
  }

  type ResetPasswordResponse={
    message:string
  }

async function changePasswordService(changePasswordRequest: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    return postData<ChangePasswordResponse>('/change-password', changePasswordRequest);
  }

 async function resetPasswordService(restPasswordRequest: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return postData<ResetPasswordResponse>('/reset-password', restPasswordRequest);
  }

export {changePasswordService,resetPasswordService}