import type { FieldConfig } from '../../types';

export const formData: FieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'tel',
  },
];
