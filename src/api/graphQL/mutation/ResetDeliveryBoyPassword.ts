import { gql } from '@apollo/client';
export const ResetDeliveryBoyPassword = gql`

mutation ResetDeliveryBoyPassword($usrEmail: String!, $otp: String!, $newPassword: String!) {
  ResetDeliveryBoyPassword(usr_email: $usrEmail, otp: $otp, new_password: $newPassword) {
    success
    message
  }
}

`;