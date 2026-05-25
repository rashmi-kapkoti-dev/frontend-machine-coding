import type { User } from '../../types';

export type CardProps = {
  user: User;
  handleViewProfile: (id: number | null) => void;
};
