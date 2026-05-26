export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    address: string;
  };
};

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type FieldConfig = {
  name: keyof FormValues;
  label: string;
  type?: string;
};
