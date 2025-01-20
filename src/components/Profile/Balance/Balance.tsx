import { useMoney } from '../../../hook/useMoney';
import { useUser } from '../../../services/context/User';
import style from './Balance.module.scss';

const Balance = () => {
  const { user } = useUser();

  return (
    <span className={style.money}>
      {user.balance ? useMoney(user.balance.toString()) : 'R$ 0,00'}
    </span>
  );
};

export default Balance;
