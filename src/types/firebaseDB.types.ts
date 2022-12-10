import { StatusDefaultCase } from '../components/atoms/Status/Status';

// Maybe add priority for status => 'open': 1, 'close': 1, 'to do': 2, review: 5
export type StatusContent = {
  name: string | StatusDefaultCase;
  iconName?: string;
  color?: string;
};

export type TaskContent = {
  id: string;
  name: string;
  description: string;
  isDone: boolean;
  status: StatusContent;
  dateTarget: Date | null;
  dateCompleted?: Date;
};

export type ProjectData = {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  goal: number;
  status: StatusContent;
  tasks?: TaskContent[];
};
