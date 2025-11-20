import { gql } from '@apollo/client';

export const Register = gql`
  mutation RegisterDeliveryBoy(
    $usrFullName: String!,
    $usrEmail: String!,
    $usrPhoneNumber: String!,
    $usrPassword: String!,
    $usrAddressLine1: String!,
    $usrCity: String!,
    $usrPostcode: String!,
    $usrAddressLine2: String
  ) {
    RegisterDeliveryBoy(
      usr_full_name: $usrFullName,
      usr_email: $usrEmail,
      usr_phone_number: $usrPhoneNumber,
      usr_password: $usrPassword,
      usr_address_line1: $usrAddressLine1,
      usr_city: $usrCity,
      usr_postcode: $usrPostcode,
      usr_address_line2: $usrAddressLine2
    ) {
      success
      message
    }
  }
`;
