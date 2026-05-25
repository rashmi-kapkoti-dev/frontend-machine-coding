import style from './Modal.module.css';
import type { ModalProps } from './types';

const Modal = ({ user, handleModalClose }: ModalProps) => {
  return (
    <div className={style.modal}>
      <div className={style.modalBox}>
        <div className={style.modalHeader}>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <button className={style.btnClose} onClick={handleModalClose}>
            ×
          </button>
        </div>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address.address}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default Modal;
