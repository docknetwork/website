import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../helpers/media';

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  overflow-y: auto;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.53);
  z-index: 0;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media ${media.medium} {
    max-width: 660px;
    max-height: 650px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    height: auto;

    &.small {
      max-width: 384px;
    }
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.position = 'fixed';
  }

  componentWillUnmount() {
    document.body.style.position = 'static';
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <Root>
        <Background onClick={this.handleClose.bind(this)} />
        <ModalWrapper className={this.props.type}>
          {this.props.children}
        </ModalWrapper>
      </Root>
    );
  }
}

export default Modal;
