import { useState } from "react";
import { isValidPassword } from "../../utils/common";
import styles from './changepassword.module.scss';
import Otp from "../forgotpassword/otp";
import { changePasswordService } from "../../services/PasswordService";

type FormStateType = {
  success: null | boolean
  message: string
}

type Changepassword = {
  password: string,
  newPassword: string,
  confirmPassword?: string,
  token?: string,
  otp?: string
}

const Resetpassword = () => {

  const [changepasswordform, setChangePasswordForm] = useState<Changepassword>({ password: "", newPassword: "", confirmPassword: "", token: "", otp: "" })

  const [formState, setFormState] = useState<FormStateType>({ success: true, message: '' })

  const [otpState, setOtp] = useState<string[] | string>(["", "", "", ""]);

  const validatePassword = (password: string) => {
    // Condition 1: Password must be at least 8 characters long
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }

    // Condition 2: Password must contain uppercase
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }

    // Condition 3: Password must contain lowercase
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }

    // Condition 4: Password must contain a number
    if (!/\d/.test(password)) {
      return 'Password must contain at least one number';
    }

    // Condition 5: Password must contain a special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'Password must contain at least one special character';
    }

    // If all conditions are met, return null
    return null;
  };

  const changePassword = async() => {
 

    //   {
    //     "password": "Paranjay@123",
    //     "newPassword": "Password@123",
    //     "confirmPassword": "Password@123",
    //     "token": "",
    //     "otp": ""
    // }
    // {
    //   "otp": "123",
    //   "token": "12345622562ghvjkhikljklbhvgfxsd5645648vhjkjklnbvghj",
    //   "newPassword": "123Abc@#4"
    // }
    delete changepasswordform.confirmPassword
    delete changepasswordform.otp
    delete changepasswordform.token

    console.log(changepasswordform, "changepasswordform")
    try {

      const changePasswordResponse = await changePasswordService({ ...changepasswordform });
      setFormState({ success: true, message: changePasswordResponse.message });

    } catch (error: any) {
      setFormState({ success: false, message: error.message });

    }
    try{

    }catch(err){

    }
  }

  return (
    <>
      <h4>Change Password</h4>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          {
            typeof formState?.success === 'boolean' && <p className={formState?.success ? styles.successAlert : styles.errorAlert}>
              {formState.message}
            </p>
          }

          <form>
            <label htmlFor="password"><label htmlFor="email">Enter current password</label></label>
            <input type="password" id="password" autoComplete='off'  onChange={
              (evt: React.ChangeEvent<HTMLInputElement>) =>
                setChangePasswordForm(form => ({ ...form, password: evt.target.value })
                )}
            />

            {changepasswordform.password.length >= 4 && (
              <span className={styles.errorMessage}>{validatePassword(changepasswordform.password)}</span>
            )}


            {/** newPassword Form Component */}
            <label htmlFor="newPassword"><label htmlFor="email">Enter new password</label></label>
            <input type="password" id="newPassword" autoComplete='off' onChange={
              (evt: React.ChangeEvent<HTMLInputElement>) =>
                setChangePasswordForm(form => ({ ...form, newPassword: evt.target.value })
                )}
            />

            {changepasswordform.newPassword.length >= 4 && (
              <span className={styles.errorMessage}>{validatePassword(changepasswordform.newPassword)}</span>
            )}

            {/** ConfirmPassword Form Component */}
            <label htmlFor="confirmPassword"><label htmlFor="email">Re-enter new password</label></label>
            <input type="password" id="confirmPassword" autoComplete='off' onChange={
              (evt: React.ChangeEvent<HTMLInputElement>) =>
                setChangePasswordForm(form => ({ ...form, confirmPassword: evt.target.value })
                )}
            />
            {(changepasswordform.confirmPassword !== '' && changepasswordform.confirmPassword !== changepasswordform.newPassword) && <span className={styles.errorMessage}>Password not match</span>}

            {/* <div className={styles.verify}>
              <div className={styles.verifysubheading}>A  4 digit code has been sent to you via email</div>
              <div >
                <Otp otpvalue={otpState} otpstate={setOtp} />
              </div>
            </div> */}
             
             <button
              type="button"
              className={styles.confirmButton}
              onClick={changePassword}
              disabled={changepasswordform.password === ''
                || changepasswordform.newPassword === ''
                || changepasswordform.confirmPassword === ''
                || changepasswordform.confirmPassword !== changepasswordform.newPassword
                || !isValidPassword(changepasswordform.confirmPassword)
                || !isValidPassword(changepasswordform.newPassword)
                // || (Array.isArray(otpState) ? otpState.join("").length === 0 : String(otpState).length === 0 ) 
                // || (Array.isArray(otpState) ? otpState.join("").length !== 0 && otpState.join("").length < 4 : String(otpState).length !== 0 && String(otpState).length < 4)
              }
            >Change password</button>
          </form>



        </div>
      </div>
    </>
  )
}

export default Resetpassword