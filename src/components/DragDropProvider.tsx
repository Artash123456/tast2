import { FC } from 'react';
import styled from 'styled-components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { DragDropProviderProps } from 'utils/types';

const ReactGridLayout = WidthProvider(Responsive);

const DragDropProvider: FC<DragDropProviderProps> = ({
  onLayoutChange = () => {},
  items,
  preventCollision = false,
  rowHeight = 250,
  layouts,
  breakpoints = { lg: 320 },
  cols = { lg: 4 },
  useCSSTransforms = false,
  dataMap = [],
  render,
}) => {
  const defaultProps = {
    items,
    preventCollision,
    rowHeight,
    layouts,
    breakpoints,
    cols,
    useCSSTransforms,
    onLayoutChange,
    draggableHandle: '.dragable-handle',
  };

  return (
    <StyledContainer>
      <ReactGridLayout {...defaultProps} margin={[16, 16]}>
        {dataMap.map((elem) => (
          <div data-grid={elem.grid} key={elem.id} id={elem.id.toString()}>
            {render(elem)}
          </div>
        ))}
      </ReactGridLayout>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ editable?: boolean }>`
  overflow: auto;
  .react-grid-layout {
    min-width: 769px;
    position: relative;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }

  .react-grid-item.cssTransforms {
    transition-property: transform;
  }

  .react-grid-item.react-grid-placeholder {
    background: #00000030;
    border: 3px dashed #000;
    opacity: 0.6;
    display: grid;
    place-items: center;
    text-align: center;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;

export default DragDropProvider;
