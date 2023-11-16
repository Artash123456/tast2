import { DragDropProvider, TaskCard } from 'components';
import { dragAndDrop } from 'redux/reducers/tasks';
import { useDispatch, useSelector } from 'utils/hooks';

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(({ tasks }) => tasks);
  return (
    <div>
      <DragDropProvider
        items={5}
        dataMap={tasks}
        onLayoutChange={(layout, layouts) =>
          dispatch(dragAndDrop({ layout, layouts }))
        }
        render={(elem) => (
          <TaskCard task={elem.task} id={elem.id} isStatic={elem.grid.static} />
        )}
      />
    </div>
  );
};

export default Tasks;
