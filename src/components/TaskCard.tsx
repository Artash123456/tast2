import { FC, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { TaskProps } from 'utils/types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GrStatusGood } from 'react-icons/gr';
import { TbDots } from 'react-icons/tb';
import { useClickOutside, useDispatch } from 'utils/hooks';
import { openModal } from 'redux/reducers/modal';
import { deleteTask, setEditValues } from 'redux/reducers/tasks';
import DateCounter from './DateCounter';

const TaskCard: FC<{ task: TaskProps; id: string; isStatic?: boolean }> = ({
  task,
  id,
  isStatic,
}) => {
  const dispatch = useDispatch();
  const [showActions, setShowActions] = useState(false);
  const actions_ref = useRef(null);
  useClickOutside(actions_ref, setShowActions);
  if (+id <= 4) return <TaskStatuses>{task?.status_name}</TaskStatuses>;
  return (
    <StyledTaskCard>
      <TbDots onClick={() => setShowActions((p) => !p)} />
      {showActions && (
        <div className="actions" ref={actions_ref}>
          <span
            onClick={() => {
              dispatch(openModal('edit_task'));
              dispatch(setEditValues({ task, id }));
            }}
          >
            Edit
          </span>
          <span onClick={() => dispatch(deleteTask(id))}>Delete</span>
        </div>
      )}
      <div>
        <h1>{task.title}</h1>
        <p title={task.description}>{task.description}</p>
        <div className="flex date-status">
          <span className="flex">
            <GrStatusGood />
            {task.status_name}
          </span>
          {task.date && <DateCounter date={task.date} id={id} />}
        </div>
      </div>
      {!isStatic && (
        <span className="dragable-handle">
          <FaArrowLeft />
          change status
          <FaArrowRight />
        </span>
      )}
    </StyledTaskCard>
  );
};
const TaskStatuses = styled.div`
  background-color: #00baff;
  height: 100%;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-size: 1.8rem;
  user-select: none;
  pointer-events: none;
`;
const StyledTaskCard = styled.div`
  background-color: #e9e9e9;
  height: 100%;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  display: grid;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .actions {
    position: absolute;
    top: 16px;
    right: 16px;
    background: #fff;
    padding: 3px 35px;
    display: grid;
    border-radius: 8px;
    > span {
      font-size: 1.6rem;
      line-height: 2;
      cursor: pointer;
    }
  }
  > svg {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 2rem;
    cursor: pointer;
  }
  > div {
    > h1 {
      font-size: 2rem;
    }
    > p {
      overflow: scroll;
      max-height: 70px;
    }
    > div > span {
      font-size: 1.6rem;
      color: #007cff;
      text-transform: capitalize;
      > svg {
        > path {
          stroke: #007cff;
        }
        margin-right: 5px;
        font-size: 2rem;
      }
    }
  }
  .dragable-handle {
    background-color: #005263b8;
    border-radius: 32px;
    height: 35px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    gap: 16px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: move;
  }
  @media (max-width: 1100px) {
    .date-status {
      flex-direction: column;
      align-items: flex-start;
      > span {
        margin-bottom: 8px;
      }
    }
    .dragable-handle {
      gap: 5px;
    }
  }
`;
export default TaskCard;
