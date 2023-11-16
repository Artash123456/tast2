import { Button, CreateTask, Modal } from 'components';
import { openModal } from 'redux/reducers/modal';
import { Tasks } from 'screens';
import { useDispatch, useSelector } from 'utils/hooks';

function App() {
  const dispatch = useDispatch();
  const { create_task, edit_task } = useSelector(({ modal }) => modal);
  const { edit } = useSelector(({ tasks }) => tasks);
  return (
    <>
      <Button
        onClick={() => {
          dispatch(openModal('create_task'));
        }}
      >
        Create Task
      </Button>
      <Tasks />
      <Modal modal_name="create_task" open={create_task}>
        <CreateTask />
      </Modal>
      <Modal open={edit_task} modal_name="edit_task">
        <CreateTask edit values={edit.task} id={edit.id} />
      </Modal>
    </>
  );
}

export default App;
