import { StatusDefaultCase } from '../components/atoms/Status/Status';

export type StatusContent = {
  name: string | StatusDefaultCase;
  iconName?: string;
  color?: string;
};

export type TaskContent = {
  id: string;
  name: string;
  isDone: boolean;
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
