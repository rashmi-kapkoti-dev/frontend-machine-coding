import type { Dispatch, SetStateAction } from 'react';
import type { User } from '../../types/index';

export type PaginationProps = {
  startIndex: number;
  setStartIndex: Dispatch<SetStateAction<number>>;
  data: User[];
  userPerPage: number;
};
