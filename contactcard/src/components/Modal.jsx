import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative z-50 min-h-[200px] min-w-[40%] bg-white p-4 rounded-md shadow-lg">
              <div className="flex justify-end">
                <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
              </div>
              {children}
            </div>
          </div>
          <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur"
          ></div>
        </>
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
