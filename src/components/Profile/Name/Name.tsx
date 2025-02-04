import { useUser } from '../../../services/context/User';
import style from './Name.module.scss'

const Name = () => {
  const { user } = useUser();
  return (
    <div className={style.Name}>
      <h2>{user.name}</h2>
    </div>
  )
}

export default Name