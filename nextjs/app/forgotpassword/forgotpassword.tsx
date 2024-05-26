
import React, { useEffect, useState } from 'react';
import styles from './forgotpassword.module.scss'
import BetagroLogo from '../../assets/images/ass.png'
import { isValidEmail, isValidPassword, isValidPhone } from '../../utils/common';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import Otp from './otp';
import { loginOtpService, requestotpservice, verifyotpservice } from '../../services/OtpService';
import { resetPasswordService } from '../../services/PasswordService';


type ForgotPassword = {
    email?: string,
    phone?: string
}


const Forgotpassword: React.FC = () => {

    //*State to handel form*/
    const [forgotpassword, setForgotpassword] = useState<ForgotPassword>({ email: '', phone: ""});

    //*State to display response from api*/
    const [formState, setFormState] = useState({ success: true, message: '' })

    //**State to display validatyion for email/mobilenumber  */
    const [toggleValidation, setToggleValidation] = useState<boolean>(true);

    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const checkOptionalEmail_Phone = (): boolean => {

        if (isValidPhone(forgotpassword.phone) || isValidEmail(forgotpassword.email)) {

            return false
        }

        return true
    }

    //**function to request otp*/
    const handleSubmit = async () => {
        let reqData = { ...forgotpassword };
        try {
            const requestOtpResponse = await requestotpservice({ ...reqData })
            setFormState({ success: true, message: requestOtpResponse.message });
        }
        catch (error: any) {
            setFormState({ success: false, message: error.message });
        }

    }


    const navigateToSigninPage=()=>{
        const lang = new URLSearchParams(window.location.search).get('lang');
           navigate(`/`);
        }

    //**Onchange function for email or mobilenumber  */
    const handleChangeForEmail_Phone = (val: string) => {
        if (parseInt(val)) {
            setForgotpassword(form => ({ ...form, phone: val }))
            setToggleValidation(true);

        } else {
            setForgotpassword(form => ({ ...form, email: val }))
            setToggleValidation(false);

        }

    }




    return (
        <div className={styles.backdrop}>

        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={BetagroLogo} width={150} alt="Betagro Logo" />
            </div>
            <div className={styles.formContainer}>
                <h3>Verify yourself</h3>
                {
                    typeof formState?.success === 'boolean' && <p className={formState?.success ? styles.successAlert : styles.errorAlert}>
                        {formState.message}
                    </p>
                }

                <form>
                                <label htmlFor="email">Email/Phone</label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={(evt) => handleChangeForEmail_Phone(evt.target.value)}
                                />
                                {
                                    toggleValidation
                                        ? forgotpassword.phone !== "" && !isValidPhone(forgotpassword.phone) && (
                                            <span className={styles.errorMessage}>{t("forgotPassword.phoneInvalidError")}</span>
                                        )
                                        : forgotpassword.email !== '' && !isValidEmail(forgotpassword.email) && (
                                            <span className={styles.errorMessage}>{t("forgotPassword.emailInvalidError")}</span>
                                        )
                                }

                  <button
                                type="button"
                                className={styles.forgotButton}
                                onClick={handleSubmit}
                                disabled={checkOptionalEmail_Phone()}
                            >{toggleValidation?"Send Otp":"Send Email"}</button>
                    
                 

                    <button
                        type="button"
                        className={styles.signupButton}
                        onClick={() => navigateToSigninPage()} 
                    >Back</button>
           
                </form>


            </div>

        </div>
        </div>
    );
};

export default React.memo(Forgotpassword);

//_____>reset password

    //function to validate password and return error according to it//
    // const validatePassword = () => {
    //     const { newPassword } =newpassword;
      
    //     // Condition 1: Password must be at least 8 characters long
    //     if (newPassword.length < 8) {
    //         return 'Password must be at least 8 characters long';
    //     }
      
    //     // Condition 2: Password must contain uppercase
    //     if (!/[A-Z]/.test(newPassword)) {
    //         return 'Password must contain at least one uppercase letter';
    //     }
      
    //     // Condition 3: Password must contain lowercase
    //     if (!/[a-z]/.test(newPassword)) {
    //         return 'Password must contain at least one lowercase letter';
    //     }
      
    //     // Condition 4: Password must contain a number
    //     if (!/\d/.test(newPassword)) {
    //         return 'Password must contain at least one number';
    //     }
      
    //     // Condition 5: Password must contain a special character
    //     if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
    //         return 'Password must contain at least one special character';
    //     }
      
    //     // If all conditions are met, return null
    //     return null;
    //   };
      
    //     const passwordValidationMessage = validatePassword();

    // //*function for resetpassword*/
    // const resetUserPassword = async () => {
    //     try {
    //         const resetPasswordResponse = await resetPasswordService({ ...newpassword })
    //         setFormState({ success: true, message: resetPasswordResponse.message });
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
          //
                    //     <label htmlFor="password"><label htmlFor="email">{t('signupPage.password')}</label></label>
                    //     <input type="password"
                    //         name="password"
                    //         autoComplete='off'
                    //         style={{ position: "relative" }}
                    //         onChange={
                    //             (evt: React.ChangeEvent<HTMLInputElement>) =>
                    //                 setNewPassword(form => ({ ...form, newPassword: evt.target.value })
                    //                 )}
                    //     />

                    //     {newpassword.newPassword.length >= 4 && (
                    //         <span className={styles.errorMessage}>{passwordValidationMessage}</span>
                    //     )}


                    //     <button
                    //         type="button"
                    //         className={styles.forgotButton}
                    //         onClick={resetUserPassword}
                    //         disabled={newpassword.newPassword === '' || isValidPassword(newpassword.newPassword)
                    //         }
                    //     >Reset Password</button>

                    // </> :

//--otp



    /**function to displaytimer */
    // const displayTimer = (expire: string) => {

    //     const dateObject = new Date(expire);
    //     setResendTimer(60)

    //     const intervalId = setInterval(() => {
    //         setResendTimer((prevTimer) => {
    //             if (prevTimer === 0) {
    //                 clearInterval(intervalId);
    //                 return 0;
    //             }
    //             return prevTimer - 1;
    //         });
    //     }, 1000);
    //     setTimeout(() => {
    //         clearInterval(intervalId);
    //     }, 1000 * 60);

    // };
    //**Onchange function for feilds  */
    // const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //     setForgotpassword((form: Forgototp) => ({ ...form, [evt.target.name]: evt.target.value }))
    // }

        //**function to verify otp*/
        // const verifyOtp = async () => {

        //     let sendOtpData = { ...forgotpassword }
           
    
        //     if (!location.state.otpType.includes("login")) {
        //         sendOtpData.otp = Array.isArray(otpState) ? otpState.join("") : otpState;
        //         try {
    
        //             const verfiOtpResponse = await verifyotpservice({ ...sendOtpData })
        //             setFormState({ success: true, message: verfiOtpResponse.message });
        //             const restOtp = localStorage.getItem("otp_verified_token")
        //             const userToken = localStorage.getItem("token")
        //             if (typeof restOtp == "string" && typeof userToken == "string") {
        //                 setResetPassword(true)
        //                 setNewPassword((form) => { return { ...form, otp: restOtp, token: userToken } })
        //             }
        //             navigate("/home")
    
        //         } catch (err) {
    
        //         }
        //     }
        //     else {
        //         sendOtpData.otp = Array.isArray(otpState) ? otpState.join("") : otpState;
        //         try {
    
        //             /** Make an API call to server */
        //             const loginOTPResponse = await loginOtpService({ ...sendOtpData });
    
        //             setFormState({ success: true, message: 'Authentication successful!' });
        //             /** Populate Local Storage */
    
    
        //             const { verified, message, userVerificationCriteria, forceChangePassword } = loginOTPResponse
    
        //             localStorage.setItem('forcedPasswordChange', `${forceChangePassword}`);
        //             if (!verified && userVerificationCriteria !== "NO_VERIFICATION") {
        //                 navigate("/forgotpassword", { state: { response: loginOTPResponse, otpType: "login" } });
        //             } else {
        //                 navigate('/home');
        //             }
    
        //         } catch (err) {
    
        //         }
    
        //     }
    
    
        // }
    


{/* <div className={styles.verify}>
    <div className={styles.verifysubheading}>A  4 digit code has been sent to you via email</div>
    <div >
        <Otp otpvalue={otpState} otpstate={setOtp} />
    </div>
</div> 


 <button
    type="button"
    className={styles.forgotButton}
    onClick={verifyOtp}
    disabled={
        !formState.message.includes("OTP sent") ||
        checkOptionalEmail_Phone() ||
        (Array.isArray(otpState) ? otpState.join("").length === 0 : String(otpState).length === 0 && showotp) ||
        (Array.isArray(otpState) ? otpState.join("").length !== 0 && otpState.join("").length < 4 : String(otpState).length !== 0 && String(otpState).length < 4)
    }

>
    Send OTP
</button> */}
// {formState.message.includes("OTP sent") && showotp ? <div className={styles.timerMessage}>
// <span>  Otp Expires in {resendTimer} sec</span>
// </div> : ""}
                        




