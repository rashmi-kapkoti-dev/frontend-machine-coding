import type { FormValues } from '../../types/index';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_REGEX = /^(?:\+91|0)?[6-9]\d{9}$/;

const validation = (formData: FormValues) => {
  const error = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };
  if (!formData.firstName.trim().length) {
    error.firstName = 'First Name Required';
  }
  if (!formData.lastName.trim().length) {
    error.lastName = 'Last Name Required';
  }
  if (!formData.email.trim().length) {
    error.email = 'Email Required';
  } else if (!EMAIL_REGEX.test(formData.email)) {
    error.email = 'Invalid Email Address';
  }
  if (!formData.phoneNumber.trim().length) {
    error.phoneNumber = 'Phone Number Required';
  } else if (!PHONE_REGEX.test(formData.phoneNumber)) {
    error.phoneNumber = 'Invalid Phone Number';
  }
  return error;
};

export default validation;
