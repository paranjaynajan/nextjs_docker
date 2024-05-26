"use client"
import React, { useState } from 'react';
import styles from './login.module.scss'
import Ass from '../../public/assets/images/ass.png'
import MobileIcon from '../../public/assets/images/cell.png'
import { loginService } from '../../services/LoginService';
import { isValidEmail} from '../../utils/common';
import  Image from "next/image"




type FormStateType = {
  success: null | boolean
  message: string
}
interface LoginForm {
  email: string;
  password: string;
}


const Login: React.FC = () => {

  /** State to contain the form values */
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' });

  /** State to contain the form current state */
  const [formState, setFormState] = useState<FormStateType>({ success: true, message: '' })

  //**State for changing validation */
  const [toggleValidation, setToggleValidation] = useState<boolean>(true);


  // const navigate = useNavigate();

  //*function to get current language */
  const navigateToSignupPage = () => {
    // Get the current language parameter from the URL.
    const lang = new URLSearchParams(window.location.search).get('lang');
    // Navigate to the signup page with the language parameter.
    // navigate(`/signUp/?lang=${lang}`);
  };

  /**Login Handler**/
  const handleLoginSubmission = async () => {
    try {
      let loginData = { ...loginForm };

      console.log('Login Submission', loginData)

      /** Make an API call to server */
      const loginResponse = await loginService({ ...loginData });

      setFormState({ success: true, message: 'Authentication successful!' });
      /** Populate Local Storage */
        // navigate('/home');
      
    } catch (error: any) {
      setFormState({ success: false, message: error.message });

    }
  }


  return (
    <div className={styles.backdrop}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image  src={Ass} width={140}  alt='logo' />
      </div>
      <div className={styles.verticalLine}></div> 
      <div className={styles.formContainer}>

        {
          typeof formState?.success === 'boolean' && <p className={formState?.success ? styles.successAlert : styles.errorAlert}>
            {formState.message}
          </p>
        }

        <form>
          {/** Email Form Component */}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setLoginForm((prev)=>{
              return {...prev,email: evt.target.value}
            })
            }
          />
           {loginForm.email !== '' && !isValidEmail(loginForm.email) && (
                <span className={styles.errorMessage}>Email is invalid</span>
              )
          }

          {/** Password Form Component */}
          <label htmlFor="password"><label htmlFor="email">Password</label></label>
          <input type="password" name="password" autoComplete='off' onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) =>
              setLoginForm(form => ({ ...form, password: evt.target.value })
              )}
          />

          {/** Remeber Me  Forgot Password Link */}
          <div className={styles.remeber} >

            <div className={styles.forgetpassword}
              // onClick={() => navigate("/forgotpassword", { state: { otpType: "forgotpassword" } })}
            >
             Forgot Password?</div>
          </div>



          <button
            type="button"
            className={styles.loginButton}
            onClick={handleLoginSubmission}
            disabled={loginForm.password === '' 
              || loginForm.email ===""}
          >LogIn</button>
        </form>

        <div className={styles.orText}>
          <div className={styles.lineTwoParts}></div>
          <div className={styles.separator}>Or</div>
          <div className={styles.lineTwoParts}></div>
        </div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton}
            // onClick={() => navigate("/forgotpassword", { state: { otpType: "login" } })}
          >
            {/* <Image src={MobileIcon} width={20} alt='Mobile' /> */}
            <span>Login with OTP</span>
          </button>

        </div>
        <p style={{fontSize:"15px"}}>
        Don't have an account? <span className={styles.linkDiv} onClick={() => navigateToSignupPage()}  >Sing Up</span>
        </p>

        {/* <LanguageSwitch /> */}
      </div>

    </div>
    </div>
  );
};

export default React.memo(Login);