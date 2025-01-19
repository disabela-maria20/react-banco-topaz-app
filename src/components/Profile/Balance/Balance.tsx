import { useUser } from '../../../hook/useUser';
import style from './Balance.module.scss'

const moneyMask = (value: string) => {
  const numericValue = typeof value === 'string'
    ? parseFloat(value.replace(/[^\d.-]/g, ''))
    : value;

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue);

  return formattedValue;
}
const Balance = () => {
  const { user } = useUser();

  return (
    <>
      {user && user.map((data) => (
        <>{data.balance && <span className={style.money} key={data.balance}>{moneyMask(data.balance.toString())}</span>}</>
      ))}
    </>
  )
}

export default Balance
