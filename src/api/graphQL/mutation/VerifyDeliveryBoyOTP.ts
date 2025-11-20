import { gql } from '@apollo/client';
export const VerifyDeliveryBoyOTP = gql`

mutation VerifyDeliveryBoyOTP($usrEmail: String!, $otp: String!) {
  VerifyDeliveryBoyOTP(usr_email: $usrEmail, otp: $otp) {
    message
    success
  }
}

`;