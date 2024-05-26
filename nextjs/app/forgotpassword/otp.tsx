
import React, { useRef, ChangeEvent, KeyboardEvent} from "react";
import styles from './forgotpassword.module.scss'
interface OTPInputProps {
  otpvalue: string[] | string;
  otpstate: React.Dispatch<React.SetStateAction<string[]|string>>;
}

const OTP: React.FC<OTPInputProps> = ({ otpvalue, otpstate }) => {

  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {

    const value = e.target.value;
    if (!isNaN(Number(value)) && value !== "") {
      otpstate((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {

    if (e.key === "Backspace") {
      otpstate((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });
  
      
        if (index > 0) {
          inputRefs[index - 1].current?.focus();
        } else {
          inputRefs[index].current?.focus();
        }

    }else{
        
        if(otpvalue[index]!=="" && index<3 ){
          
            inputRefs[index + 1].current?.focus();
        }
    }
  };
  

  return (
    <div>
       <div className={styles.otpfield}>
          {Array.isArray(otpvalue)
            ? otpvalue.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={inputRefs[index]}
                 
                />
              ))
            : null}
        </div>
        {/* {error && <label className="pl-2 p-4">Invalid OTP</label>} */}
     
   
    </div>
  );
};

export default OTP;
