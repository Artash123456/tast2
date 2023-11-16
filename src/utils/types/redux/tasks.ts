export enum STATUSES {
  pending = 0,
  completed = 1,
  overdue = 2,
  deleted = 3,
}
export interface Grid {
  x: STATUSES;
  y: number;
  w: number;
  h: number;
  i: string;
  static?: boolean;
}
export interface Tasks {
  grid: Grid;
  tasks: Grid[];
}
