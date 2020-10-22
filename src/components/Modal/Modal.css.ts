import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  top: 0;
  left: 0;
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 400px;
  max-height: 600px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const ModalTitle = styled.h3`
  width: 100%;
  background-color: orange;
  font-size: 1.3em;
  color: white;
  padding: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 40px;
  height:40px;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  cursor: pointer;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 1.4em;
  font-weight: 500;
`;