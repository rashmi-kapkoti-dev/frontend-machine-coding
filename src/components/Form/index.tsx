import type { FormProps } from './types';
import style from './Form.module.css';

const Form = ({ labels, onSubmit, handleChangeInput, error }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={style.container}>
      {labels.map((item) => (
        <div key={item.name} className={style.fieldGroup}>
          <label htmlFor={item.name} className={style.label}>
            {item.label}
          </label>
          <input
            id={item.name}
            type={item.type}
            className={`${style.input} ${error?.[item.name] ? style.inputError : ''}`}
            onChange={(e) => handleChangeInput(e.target.value, item.name)}
          />
          {error?.[item.name] && (
            <span className={style.error}>{error[item.name]}</span>
          )}
        </div>
      ))}
      <button type="submit" className={style.btn}>
        Submit
      </button>
    </form>
  );
};

export default Form;
