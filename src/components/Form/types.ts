import type { FieldConfig, FormValues } from '../../types/index';

export type FormProps = {
  onSubmit: (e: React.SubmitEvent) => void;
  labels: FieldConfig[];
  formData: FormValues;
  handleChangeInput: (value: string, type: string) => void;
  error: FormValues;
};
