import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.spinner} aria-label="Loading" role="status" />
    </div>
  );
};

export default Loader;
