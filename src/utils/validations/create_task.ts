import * as Yup from 'yup';
export const create_task_validation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});
