import { useTheme } from '../../context/ThemeContext';
import style from './ThemeDemo.module.css';

const ThemeDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="theme-select">
        Theme
      </label>
      <select
        id="theme-select"
        className={style.select}
        value={theme}
        onChange={(e) => setTheme(e.target.value === 'dark' ? 'dark' : 'light')}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeDemo;
