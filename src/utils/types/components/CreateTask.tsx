import { TaskProps } from './Tasks';

export interface CreateTaskProps {
  edit?: boolean;
  values?: TaskProps;
  id?: string;
}
