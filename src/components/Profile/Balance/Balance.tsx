import { useUser } from '../../../hook/useUser';
import style from './Balance.module.scss';

const moneyMask = (value: string) => {
  const numericValue = typeof value === 'string'
    ? parseFloat(value.replace(/[^\d.-]/g, ''))
    : value;

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue);

  return formattedValue;
};

const Balance = () => {
  const { user } = useUser();

  return (
    <span className={style.money}>
      {user.balance ? moneyMask(user.balance.toString()) : 'R$ 0,00'}
    </span>
  );
};

export default Balance;
