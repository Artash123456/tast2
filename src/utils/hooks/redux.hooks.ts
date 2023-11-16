import {
  TypedUseSelectorHook,
  useDispatch as useD,
  useSelector as useS,
} from 'react-redux';
import { Dispatch, RootState } from 'utils/types';

export const useDispatch: () => Dispatch = useD;
export const useSelector: TypedUseSelectorHook<RootState> = useS;
