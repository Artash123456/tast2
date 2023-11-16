import { FC } from 'react';
import { Form, Formik } from 'formik';
import { createTask, editTask } from 'redux/reducers/tasks';
import { styled } from 'styled-components';
import { useDispatch } from 'utils/hooks';
import { CreateTaskProps } from 'utils/types';
import { create_task_validation } from 'utils/validations';
import Input from './Input';
import Button from './Button';
import { closeModal } from 'redux/reducers/modal';

const CreateTask: FC<CreateTaskProps> = ({
  edit,
  values = {
    title: '',
    description: '',
    date: '',
    status_name: 'pending',
  },
  id = '',
}) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>{edit ? 'Edit' : 'Create'} Task</h1>
      <Formik
        enableReinitialize
        initialValues={values}
        validationSchema={create_task_validation}
        onSubmit={(values) => {
          if (edit) {
            dispatch(editTask({ values, id }));
            dispatch(closeModal('edit_task'));
          } else {
            dispatch(createTask(values));
            dispatch(closeModal('create_task'));
          }
        }}
      >
        {({ errors, touched, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Input
                label="Task Title"
                name="title"
                error={errors?.title && touched?.title ? errors?.title : ''}
              />
              <Input label="Task Title" name="description" as="textarea" />
              <Input name="date" type="datetime-local" min={new Date()} />
              <Button type="submit">{edit ? 'Save Changes' : 'Create'}</Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
const Container = styled.div`
  background-color: #fff;
  min-width: 500px;
  > h1 {
    margin-top: -15px;
    font-size: 1.8rem;
  }
  button {
    margin-top: 25px;
    width: 100%;
  }
`;
export default CreateTask;
