import React, { useEffect } from 'react';
import { withAlert } from './withProvider';

const infoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 17h2v-6h-2v6zm0-8h2V7h-2v2zm-1 12a1 1 0 110-2 1 1 0 010 2zm0-20a10 10 0 100 20 10 10 0 000-20z"/>
  </svg>
);

const successIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm-1 14.25l4.5-4.5-1.5-1.5-3 3-1.5-1.5-1.5 1.5z"/>
  </svg>
);

const warningIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 21h22L12 2zm0 13h-1v-1h1v1zm0-3h-1V7h1v5z"/>
  </svg>
);

const errorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 21h22L12 2zm0 15h-1v-1h1v1zm0-3h-1V7h1v7z"/>
  </svg>
);

function Alert({ alert, removeAlert }) {
  if (!alert) {
    return null;
  }

  const { message, type } = alert;

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert, removeAlert]);

  if (!type || !['info', 'success', 'warning', 'error'].includes(type)) {
    return null;
  }

  const typeStyles = {
    info: 'bg-blue-100 border-blue-500 text-blue-700',
    success: 'bg-green-100 border-green-500 text-green-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    error: 'bg-red-100 border-red-500 text-red-700',
  };

  const icons = {
    info: infoIcon,
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
  };

  return (
    <div className={`fixed z-40 top-4 right-4 border-l-4 p-3 ${typeStyles[type]} rounded-md w-full max-w-xs md:max-w-sm lg:max-w-md`} role="alert">
      <div className="flex items-center">
        {icons[type]}
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-center">
            <span>{message}</span>
            <button
              className="ml-3 text-lg leading-none text-current hover:text-opacity-75 focus:outline-none"
              onClick={removeAlert}
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAlert(Alert);