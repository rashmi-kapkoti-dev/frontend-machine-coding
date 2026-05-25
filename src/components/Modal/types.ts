import type { User } from '../../types';

export type ModalProps = {
  user: User;
  handleModalClose: () => void;
};
