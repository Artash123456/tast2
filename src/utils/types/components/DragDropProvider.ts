import { ReactNode } from 'react';
import { ResponsiveProps } from 'react-grid-layout';
import { STATUSES, Grid } from '../redux/tasks';
import { TaskProps } from './Tasks';

export interface DragDropProviderProps extends ResponsiveProps {
  items: number;
  dataMap: Array<{
    grid: Grid;
    id: string;
    task: TaskProps;
  }>;
  render: <
    T extends {
      grid: Grid;
      id: string;
      task: TaskProps;
    }
  >(
    elem: T
  ) => ReactNode;
}
