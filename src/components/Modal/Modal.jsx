import React from "react";
import ReactDOM from "react-dom";
import "../Modal/Modal.scss";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
