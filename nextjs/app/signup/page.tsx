"use client"
import React, { useState } from 'react';
import styles from './signup.module.scss'
import Ass from '../../public/assets/images/ass.png'
import { isValidEmail, isValidPassword, isValidPhone } from '../../utils/common';
import { signupService } from '../../services/SignupService';
import  Image from "next/image"


type FormStateType = {
    success: null | boolean
    message: string
}

interface IsignupForm {
    name: string;
    email: string;
    password: string;
    mobileNumber: string;
    confirmPassword: string;
}


const Signup: React.FC = () => {

    /** State to contain the form values */
    const [signupForm, setSignupForm] = useState<IsignupForm>({ name: "", email: '', password: '', mobileNumber: '', confirmPassword: "" });

    /** State to contain the form current state */
    const [formState, setFormState] = useState<FormStateType>({ success: null, message: '' })

    //for i18



    //function for signup form handle//
    const handleLoginSubmission = async () => {
        const { confirmPassword, ...signupFormData } = signupForm;
        let signupData = { ...signupFormData };

        try {

            const signupResponse = await signupService({ ...signupData });
            const { message} = signupResponse

            setFormState({ success: true, message: message });
        } catch (error: any) {
            setFormState({ success: false, message: error.message });
        }
    }


    //**Onchange function for feilds  */
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

        setSignupForm((form: IsignupForm) => ({ ...form, [evt.target.name]: evt.target.value }))
    }

    //function to validate password and return error according to it//
    const validatePassword = () => {
        const { password } = signupForm;

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

 const passwordValidationMessage = validatePassword();


 const navigateToSigninPage=()=>{
 // Get the current language parameter from the URL.
    const lang = new URLSearchParams(window.location.search).get('lang');
 // Navigate to the signup page with the language parameter.

 }
    return (
        <div className={styles.backdrop}>

        <div className={styles.container}>
            <div className={styles.logo}>
            <Image  src={Ass} width={140}  alt='logo' />
            </div>
            <div className={styles.formContainer}>
                {
                    typeof formState?.success === 'boolean' && <p className={formState?.success ? styles.successAlert : styles.errorAlert}>
                        {formState.message}
                    </p>
                }
                <form>
                    {/** Name  form component*/}
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"
                        onChange={(evt) => handleChange(evt)}
                    />

                    {/** Email Form Component */}
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"
                        onChange={(evt) => handleChange(evt)}
                    />
                    {(signupForm.email !== '' && !isValidEmail(signupForm.email)) && <span className={styles.errorMessage}>Invalid Email</span>}

                    {/**mobileNumber Form Component */}
                    <label htmlFor="mobileNumber"><label htmlFor="email">Phone</label></label>
                    <input type="text"
                        name="mobileNumber"
                        autoComplete='on'
                        maxLength={10}
                        onChange={(evt) => handleChange(evt)}
                    />
                    {signupForm.mobileNumber !== "" && !isValidPhone(signupForm.mobileNumber) && (
                        <span className={styles.errorMessage}>Invalid mobile number</span>
                    )}

                    {/** Password Form Component */}

                    <label htmlFor="password"><label htmlFor="email">Password</label></label>
                    <input type="password"
                        name="password"
                        autoComplete='off'
                        style={{ position: "relative" }}
                        onChange={(evt) => handleChange(evt)}
                    />

                    {signupForm.password.length >= 4 && (
                        <span className={styles.errorMessage}>{passwordValidationMessage}</span>
                    )}

                    {/** ConfirmPassword Form Component */}
                    <label htmlFor="confirmPassword"><label htmlFor="email">Confirm Password</label></label>
                    <input
                        type="password"
                        name="confirmPassword"
                        autoComplete='off'
                        onChange={(evt) => handleChange(evt)}
                    />
                    {(signupForm.password !== '' && signupForm.password !== signupForm.confirmPassword) && <span className={styles.errorMessage}>
                        Should match to password</span>}

                    <button
                        type="button"
                        className={styles.signupButton}
                        onClick={handleLoginSubmission}
                        disabled={signupForm.confirmPassword === ''
                            || signupForm.email === ''
                            || signupForm.name === ''
                            || signupForm.password === ''
                            || signupForm.password !== signupForm.confirmPassword
                            || !isValidPassword(signupForm.password)
                        }
                    >Sign Up</button>

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

export default React.memo(Signup);

