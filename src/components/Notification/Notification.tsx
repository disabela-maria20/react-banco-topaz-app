import style from './Notification.module.scss';

type Color = 'green' | 'red'; 

interface NotificationProps {
  title: string;
  description: string;
  color: Color;
}

const Notification: React.FC<NotificationProps> = ({ title, description, color }) => {
  const notificationClass = `${style.notification} ${style[color]}`; 

  return (
    <div className={notificationClass}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Notification;
