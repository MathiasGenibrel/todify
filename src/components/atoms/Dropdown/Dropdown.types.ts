import { Dispatch, DispatchWithoutAction, SetStateAction } from 'react';
import { StatusContent } from '../../../types/firebaseDB.types';

export type DropdownProps = {
  label: string;
  state: StatusContent | null;
  setState: Dispatch<SetStateAction<StatusContent>>;
  data: StatusContent[];
  createTaskPressHandler: DispatchWithoutAction;
};
