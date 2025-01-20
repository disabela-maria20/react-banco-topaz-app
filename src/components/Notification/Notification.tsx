import React, { useState, useEffect } from 'react';
import style from './Notification.module.scss';

type Color = 'green' | 'red'; 

interface NotificationProps {
  title: string;
  description: string;
  color: Color;
}

const Notification: React.FC<NotificationProps> = ({ title, description, color }) => {
  const [isVisible, setIsVisible] = useState(true);
  const notificationClass = `${style.notification} ${style[color]}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={notificationClass}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Notification;
