import React, { FC, useEffect } from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { taskCompletionExpired } from 'redux/reducers/tasks';
import { useCountdown, useDispatch } from 'utils/hooks';

const DateCounter: FC<{ date: string; id: string }> = ({ date, id }) => {
  const [day, hours, minutes, seccond] = useCountdown(date);
  const dispatch = useDispatch();
  useEffect(() => {
    if (minutes === 0 && seccond === 0 && hours === 0 && day === 0) {
      dispatch(taskCompletionExpired(id));
    }
  }, [dispatch, id, seccond, minutes, day, hours]);
  return (
    <span className="flex">
      <BsCalendarDate />
      {day}D, {hours}H {minutes}M {seccond}S
    </span>
  );
};

export default DateCounter;
