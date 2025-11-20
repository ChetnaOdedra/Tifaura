import { first } from "rxjs"
import ContactUs from "../screens/drwerScreens/ContactUs"

const string =

{

  sucess:"Success",  
  failed:"Error",
  appName :"TwilightX",     
  save:"Save", 
  
  loginString : {

        title: "Login",
        description: "Please enter your credentials to login.",
        login: "Login",
        email:"Email",
        password:"Password",
        placeholderEmail: "Enter your email *",
        placeholderPassword: "Enter password *",
        plasceholderConfirmPassword: "Enter Confirm password *",
        placeholderPhone: "Enter your phone number *",
        placeholderOtp: "Enter OTP",
        forgotPassword: "Forgot Password?",
        createAccount: "Don't have an account?",
        sendOTP:"Send OTP",
        mobileCode:"+91",
        loginSuccess:"You have login successfully."
},

 registrationString : {
        title: "Registration",
        signUp: "Sign Up",    
        submit:"Submit",
        completeProfile:"Complete profile",
        completeProfileSuccess:"Profile completed successfully.",
        firstName:"First Name",
        lastName:"Last Name",
        placeholderFirstName: "Enter your first name",
        placeholderLastName: "Enter your last name",
        haveAccount: "Already have an account?",
        otpMessage: "An OTP has been sent to your mobile number.",
        fullname:"Full Name",
        placeHolderFullName:"Enter your full name *",
        phone:"Phone Number",
        vehicalInsNo:"National Insurance Number",
        placeholderVehicalInsNo:"Enter your national insurance number *",
        drivingLicenseNo:"Driving License Number",
        placeholderDrivingLicenseNo:"Enter your driving license number *",
        vehicalType:"Vehicle Type",
        placeholderVehicalType:"Enter your vehicle type *",
        vehicalRegNo:"Vehicle Registration Number",
        placeholderVehicalRegNo:"Enter your vehicle registration number *",
        phone:"Phone Number",
        placeholderPhone:"Enter your phone number *",
        addressLine1:"Address Line 1",
        placeholderAddressLine1:"Enter your address line 1 *",
        addressLine2:"Address Line 2",
        placeholderAddressLine2:"Enter your address line 2 (optional)",
        town:"Town/City",
        placeholderTown:"Enter your town or city (optional)",
        postCode:"Post Code",
        placeholderPostCode:"Enter your post code *",
        confirmPassword:"Confirm Password",
        newPsw:"New Password",
        placeHolderNewPsw:"Enter new password *",
        placeholderConfirmPassword:"Re-enter your password *",
        signUpSuccess:"You have registered successfully.",
        ok:"OK",

 },

 forgotpasswordString:{
        description: "Please enter your registered email to reset your password.",
        sendCode: "Send OTP",
        verifyOtpTitle:"We've sent a 6-digit OTP to ",
        otpPlaceHolder:"0",
        verify:"Verify",
        resendOtp:"Resend Otp",
        otp:"OTP",
        resetPasswordDescription:"Reset your password and login with new password.",
        resetPassword:"Reset password",
        
 },

  errorString: {
        invalid:"Invalid!",
        empty:"Empty!",
        eroor:"Error",
        emptyEmail: "Email cannot be empty.",
        emptyFullName:"Full name can not be empty",
        emptyPassword: "Password cannot be empty.",
        emptyConfirmPassword: "Confirm password cannot be empty.",
        emptyPhone: "Phone number cannot be empty.",
        emptyOtp: "OTP cannot be empty.",
        invalidEmailTitle:"Invalid Email",
        invalidEmail: "Please enter a valid email address.",
        invalidPhoneTitle:"Invalid Phone Number",
        invalidPhone: "Please enter a valid 10-digit phone number.",
        invalidOtpTitle: "Invalid OTP",
        invalidPasswordTitle: "Invalid Password",
        invalidPassword: "Password must be at least 6 characters.",
        invalidConfirmPassword: "Confirm password must be at least 6 characters.",
        passwordNotMatch:"Password and confirm password should be same!",
        noInternet:"No Internet Connection",
        noInternetDes: "No Internet Connection. Please check your internet connectivity.",
        invalidOtp : "Enter six digits OTP",
        emptyClass:"Please select class",
        emptyAddressLine1:"Address Line 1 can not be empty",
        emptyPostCode:"Post Code can not be empty",
  },
       successString:{
         success:'success',
         passwordResetSuccess:"Password reset successfully",  
       },
  screenNames:{
       Home:"Home",
       Privacy:"Privacy Policy",
       TermsCondition:"Terms & Conditions",
       ShareApp:"Share App",
       RateApp:"Rate Us",
       ContactUs:"Contact Us",
       Earnings:'Payout',
       Settings:"Settings",
       PartnerReg:"Partner Registration",
       ChangePsw:"Change Password"
  }
}

export default  string