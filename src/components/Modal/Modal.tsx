import React, { MouseEvent, ReactChildren } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import { ModalWrapper, ModalContent, ModalTitle, CloseButton } from './Modal.css';

interface ModalProps {
  children: React.ReactChild;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const history = useHistory();

  const handleCLoseModal = (e: MouseEvent) => {
    e.stopPropagation();
    history.goBack();
  }

  return createPortal(
    <ModalWrapper onClick={handleCLoseModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {title && <ModalTitle>title</ModalTitle>}
        <CloseButton onClick={handleCLoseModal}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal') as HTMLElement
  )
}

export default Modal;
