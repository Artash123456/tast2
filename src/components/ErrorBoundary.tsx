import React, { ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
export default class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { error: Error | string; errorInfo: ErrorInfo }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      error: '',
      errorInfo: { componentStack: '' },
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    const { errorInfo } = this.state;
    if (Boolean(errorInfo.componentStack)) {
      return (
        <StyledError>
          Something wrong happened, we already aware of the issue and working on
          it, please reload the page and try again
        </StyledError>
      );
    }

    return this.props.children;
  }
}

const StyledError = styled.p`
  color: red;
  margin-top: 30px;
  text-align: center;
`;
