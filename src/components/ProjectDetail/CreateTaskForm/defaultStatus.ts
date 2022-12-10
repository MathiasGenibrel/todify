import { StatusContent } from '../../../types/firebaseDB.types';

export const defaultStatus: StatusContent[] = [
  {
    name: 'open',
    iconName: 'ellipse-outline',
    color: '#777380',
  },
  {
    name: 'todo',
    iconName: 'timer-outline',
    color: '#FFB41F',
  },
  {
    name: 'close',
    iconName: 'checkmark-circle-outline',
    color: '#5b9e42',
  },
];
