import { useState } from 'react';
import Form from '../../components/Form';
import { formData } from './data';
import validation from './validation';
import style from './FormPage.module.css';
import type { FormValues } from '../../types';

const FormPage = () => {
  const [data, setData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const [error, setError] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] =
    useState<boolean>(false);

  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const formError = validation(data);
    setError(formError);
    const hasError = Object.values(formError).some(
      (error: string) => error.length > 0
    );
    if (!hasError) {
      setIsSubmissionSuccessful(true);
    }
  };

  const handleChangeInput = (value: string, type: string) => {
    const latest = { ...data, [type]: value };
    setData(latest);
    const formError = validation(latest);
    setError(formError);
  };

  return (
    <>
      {isSubmissionSuccessful ? (
        <div className={style.successContainer}>
          <div className={style.successCard}>
            <p>Thank You For Your Submission!</p>
            <div>Submitted Details Are:</div>
            <div>First Name: {data.firstName}</div>
            <div>Last Name: {data.lastName}</div>
            <div>Email: {data.email}</div>
            <div>Phone Number: {data.phoneNumber}</div>
          </div>
        </div>
      ) : (
        <div className={style.formContainer}>
          <div className={style.formCard}>
            <Form
              onSubmit={onSubmit}
              formData={data}
              error={error}
              labels={formData}
              handleChangeInput={handleChangeInput}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FormPage;
