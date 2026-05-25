import style from './Card.module.css';
import type { CardProps } from './types';

const Card = ({ user, handleViewProfile }: CardProps) => {
  return (
    <div className={style.cardContent}>
      <div>
        <div className={style.cardName}>{user?.firstName}</div>
        <div className={style.cardEmail}>{user?.email}</div>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => handleViewProfile(user.id)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
