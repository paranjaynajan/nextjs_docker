
import React, { ReactNode} from 'react';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClassName = isOpen ? 'modal-wrapper open' : 'modal-wrapper';

  return (
    <div className={modalClassName} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>
          &times;
        </button> */}
        {children}
        
      </div>
      
    </div>
  );
};

export default Modal;
