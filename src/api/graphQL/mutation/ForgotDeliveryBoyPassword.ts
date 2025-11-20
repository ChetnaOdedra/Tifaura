import { gql } from '@apollo/client';
export const ForgotDeliveryBoyPassword = gql`

mutation ForgotDeliveryBoyPassword($usrEmail: String!) {
  ForgotDeliveryBoyPassword(usr_email: $usrEmail) {
    message
    success
  }
}

`;