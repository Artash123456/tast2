import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useDispatch } from 'utils/hooks';
import { AiFillCloseSquare } from 'react-icons/ai';
import { closeModal } from 'redux/reducers/modal';

const modal = document.getElementById('modal-root') as HTMLDivElement;

interface Props {
  children?: ReactNode;
  open: boolean;
  modal_name?: string;
}

const Modal: FC<Props> = ({ children, open, modal_name }) => {
  const dispatch = useDispatch();

  if (open)
    return ReactDOM.createPortal(
      <>
        <StyledModal>
          <div>
            <AiFillCloseSquare
              onClick={() => dispatch(closeModal(modal_name))}
              className="close"
            />
            {children}
          </div>
        </StyledModal>
      </>,
      modal
    );
  return <></>;
};

const StyledModal = styled.div`
  background-color: #00000066;
  padding: 32px;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  > div {
    display: inline-flex;
    margin: 0 auto;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    > div {
      padding: 32px;
      overflow: auto;
    }
    > svg {
      color: lightgray;
      font-size: 30px;
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 2;
    }
  }
`;

export default Modal;
