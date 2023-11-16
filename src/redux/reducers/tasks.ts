import { createSlice } from '@reduxjs/toolkit';
import { loadStore } from 'utils/helpers';

const setStatusName = (x: number) => {
  switch (x) {
    case 0: {
      return 'pending';
    }
    case 1: {
      return 'completed';
    }
    case 2: {
      return 'overdue';
    }
    case 3: {
      return 'deleted';
    }
    default: {
      return 'pending';
    }
  }
};
const initialState = {
  grid: {
    x: 0,
    y: 1,
    w: 1,
    h: 1,
  },
  tasks: [
    {
      task: { status_name: 'pending' },
      grid: { x: 0, y: 0, w: 1, h: 0.2, static: true },
      id: 1,
    },
    {
      task: { status_name: 'completed' },
      grid: { x: 1, y: 0, w: 1, h: 0.2, static: true },
      id: 2,
    },
    {
      task: { status_name: 'overdue' },
      grid: { x: 2, y: 0, w: 1, h: 0.2, static: true },
      id: 3,
    },
    {
      task: { status_name: 'deleted' },
      grid: { x: 3, y: 0, w: 1, h: 0.2, static: true },
      id: 4,
    },
  ],
  layouts: {},
  edit: {
    task: {},
    id: '',
  },
};
const initial = loadStore('tasks', initialState);

export const tasks = createSlice({
  name: 'tasks',
  initialState: initial,
  reducers: {
    dragAndDrop: (state, action) => {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      for (let [index, item] of tasks.entries()) {
        for (let elem of JSON.parse(JSON.stringify(action.payload.layout))) {
          if (String(item.id) === String(elem.i)) {
            tasks[index].grid = elem;
            tasks[index].task.status_name = setStatusName(elem.x);
          }
        }
      }
      state.tasks = tasks;
    },
    createTask: (state, action) => {
      const id = state.tasks.length + 1;
      const task = {
        task: { ...action.payload, status_name: 'pending' },
        id,
        grid: { ...state.grid },
      };
      state.tasks = [...state.tasks, task];
    },
    editTask: (state, action) => {
      const { id, values } = action.payload;
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      for (let task of tasks) {
        if (task.id === id) {
          task.task = values;
          if (values.date && new Date(values.date).getTime() > Date.now()) {
            task.grid.static = false;
            task.grid.x = 0;
          }
        }
      }
      state.tasks = tasks;
    },
    deleteTask: (state, action) => {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      for (let task of tasks) {
        if (task.id === action.payload) {
          task.grid.x = 3;
        }
      }
      state.tasks = tasks;
    },
    taskCompletionExpired: (state, action) => {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      for (let task of tasks) {
        if (task.id === action.payload) {
          task.grid.x = 2;
          task.grid.static = true;
        }
      }
      state.tasks = tasks;
    },
    setEditValues: (state, action) => {
      state.edit.task = action.payload.task;
      state.edit.id = action.payload.id;
    },
  },
});
export const {
  dragAndDrop,
  createTask,
  editTask,
  deleteTask,
  taskCompletionExpired,
  setEditValues,
} = tasks.actions;
