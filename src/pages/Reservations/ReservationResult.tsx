import React, { useState, useEffect } from 'react';

const PendingSuccessFailedComponent = () => {
  const [status, setStatus] = useState('pending');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Show the "pending" state for 5 seconds
    const timeoutId = setTimeout(() => {
      // After 5 seconds, determine success or failure with a 50% probability
      const isSuccess = Math.random() < 0.5;

      if (isSuccess) {
        setStatus('success');
        setMessage('Gratulerer! Du har fått tildelt plass');
      } else {
        setStatus('failed');
        setMessage('Det finnes ingen ledige plasser');
      }
    }, 5000);

    // Clear the timeout if the component is unmounted before the timeout is completed
    return () => clearTimeout(timeoutId);
  }, []);

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '32px',
    color: status === 'success' ? 'green' : status === 'failed' ? 'red' : 'black',
  };

  return <div style={style}>{status === 'pending' ? 'Pending...' : message}</div>;
};

export default PendingSuccessFailedComponent;



