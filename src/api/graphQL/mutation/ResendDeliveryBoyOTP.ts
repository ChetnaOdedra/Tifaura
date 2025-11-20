import { gql } from '@apollo/client';
export const ResendDeliveryBoyOTP = gql`

mutation ResendDeliveryBoyOTP($usrEmail: String!) {
  ResendDeliveryBoyOTP(usr_email: $usrEmail) {
    success
    message
  }
}

`;