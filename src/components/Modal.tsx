import React from "react";
import ReactDOM from "react-dom";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-50 px-4 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`bg-white rounded-md p-6 w-full max-w-md shadow-md relative transform transition-transform duration-500 ${isOpen ? 'scale-100' : 'scale-95'}`}>
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;