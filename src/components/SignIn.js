
import firebase from "../firebase"
import React,{useEffect, useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useNavigate} from "react-router-dom"
import OTPInput, { ResendOTP } from "otp-input-react";





const SignIn = () => {
  const [phone_number,setPhone_Number] =useState("")
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [otp,setOtp] =useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    window.recaptchaVerifier  =new firebase.auth.RecaptchaVerifier("recaptcha-container",{
       size: "invisible",
       callback:function(response){
          console.log("Captcha Resolved");
       },
       defaultCountry: "IN",
    })
  },[])

  const auth = firebase.auth();

  const loginSubmit =(e)=>{
     e.preventDefault();
     let phonenumber =phone_number
     const appVerifier = window.recaptchaVerifier;

     auth.signInWithPhoneNumber(phonenumber,appVerifier)
       .then((confirmationResult)=>{
         window.confirmationResult = confirmationResult;
         console.log("otp Sent")
         setViewOtpForm(true)
       })
  }
   const otpSubmit =(e)=>{
      e.preventDefault();
      let opt_numbe =otp
      window.confirmationResult.confirm(opt_numbe)
      .then((confirmationResult)=>{
        navigate('/dashboard')
      })
      .catch((error) => {
        alert(error.message);
      });
   }
 

  return (
    <div className="wrapper">
       <div id="recaptcha-container"></div>
      <h1 className="main-heading">Sign in</h1>
      <p className="sub-text">Sign in using your mobile number.</p>
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">     
               <PhoneInput
                    defaultCountry="IN"
                    name="phone"
                    onChange={setPhone_Number}
                    placeholder="Enter Phone Number" 
               />

            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </div>
      ) : (
        <div className="form-wrapper" >
            <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
            <button type="button" onClick={otpSubmit}>Verify OTP</button>
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
         </div>
      )}
    </div>
  );
};

export default SignIn;