import { useUser } from '../../../hook/useUser';
import style from './Name.module.scss'



const Name = () => {
  const { user } = useUser();
  return (
    <>
      {user && user.map((data) => (
        <div key={data.name} className={style.Name}>
          <h2>{data.name}</h2>
        </div>
      ))}
    </>
  )
}

export default Name