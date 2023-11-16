import { STATUSES } from '../redux/tasks';

export interface TaskProps {
  status_name: 'pending' | 'completed' | 'overdue' | 'deleted';
  title: string;
  description: string;
  date: string;
  status: STATUSES;
}
