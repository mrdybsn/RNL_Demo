import { useEffect, type FC } from "react";

interface ToastMessageProps {
    message: string;
    isFailed?: boolean;
    isVisible: boolean;
    onClose: ()=> void;
}

const ToastMessage: FC<ToastMessageProps> = ({
    message, 
    isFailed, 
    isVisible, 
    onClose
}) => {
    useEffect(()=>{
        if(isVisible){
            const timer = setTimeout(() =>{
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

  return (
    <>
    <div className={`fixed top-40 right-0 md:right-4 z-999999 flex items-center w-full max-w-xs p-4 text-black
        ${
            isFailed ? "bg-red-100" :  "bg-green-100"
        } rounded-lg shadow-lg transition-opacity duration-300 
        ${
            isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
            role="alert"
        >
        <div className={`inline-flex items-center justify-center shrink-0 w-7 h-7 
            ${
                isFailed ? "text-red-500 bg-red-200 text-fg-danger bg-danger-soft" : "text-green-500 bg-green-200 text-fg-success bg-success-soft" 
            }   rounded-lg transition-transform duration-300 
            ${
                isVisible ? 'translate-y-0' : '-translate-y-10'
            }`}
        >
            {isFailed ? (
                <>
                <svg 
                    className="w-5 h-5" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M6 18 17.94 6M18 18 6.06 6"
                    />
                </svg>
                <span className="sr-only">Error icon</span>
                </>
            ) : (
                <>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="https://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 11.917 9.724 16.5 19 7.5" 
                    />
                </svg>
                <span className="sr-only">Check icon</span>
                </>
            )}
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
    </div>
    </>
  )
}

export default ToastMessage