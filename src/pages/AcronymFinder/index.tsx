import { useState } from 'react';
import { getAcronym } from '../../utils';
import style from './AcronymFinder.module.css';

const AcronymFinder = () => {
  const [value, setValue] = useState('');
  const [acronym, setAcronym] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setAcronym('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      setAcronym('');
      return;
    }
    setAcronym(getAcronym(value));
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="acronym-input">
          Enter a phrase
        </label>
        <div className={style.inputContainer}>
          <input
            id="acronym-input"
            className={style.input}
            type="text"
            value={value}
            onChange={handleInputChange}
          />
          <button className={style.btn} type="submit">
            Find Acronym
          </button>
        </div>
      </form>
      <p className={`${style.result} ${!acronym ? style.resultEmpty : ''}`}>
        Acronym: <span className={style.acronymText}>{acronym}</span>
      </p>
    </div>
  );
};

export default AcronymFinder;
