import { gql } from '@apollo/client';
export const LoginBoy = gql`
mutation LoginDeliveryBoy($usrEmail: String!, $usrPassword: String!) {
  LoginDeliveryBoy(usr_email: $usrEmail, usr_password: $usrPassword) {
    success
    message
    data {
      usr_id
      usr_name
      usr_full_name
      usr_email
      usr_phone_number
      usr_address_line1
      usr_address_line2
      usr_city
      usr_postcode
      usr_role
      usr_is_verified
      needsVerification
      token
      message
      exists
      is_verified
    }
  }
}
`;