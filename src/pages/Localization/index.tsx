import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Localization.module.css';

const Localization = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setGreeting('');
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setGreeting('');
      setError(true);
      return;
    }
    setError(false);
    setGreeting(name.trim());
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="language-select">
          {t('language')}
        </label>
        <select
          id="language-select"
          className={style.select}
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
        <label className={style.label} htmlFor="name-input">
          {t('nameLabel')}
        </label>
        <div className={style.inputContainer}>
          <input
            id="name-input"
            className={`${style.input} ${error ? style.inputError : ''}`}
            type="text"
            value={name}
            onChange={handleInputChange}
          />
          <button className={style.btn} type="submit">
            {t('submit')}
          </button>
        </div>
        {error && <span className={style.error}>{t('nameRequired')}</span>}
      </form>
      <p className={`${style.result} ${!greeting ? style.resultEmpty : ''}`}>
        <span className={style.greetingText}>
          {t('greeting', { name: greeting })}
        </span>
      </p>
    </div>
  );
};

export default Localization;
