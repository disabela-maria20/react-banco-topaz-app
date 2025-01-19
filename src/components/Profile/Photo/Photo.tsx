import style from './Photo.module.scss'

const Photo = () => {  
  return (
    <div className={style.Photo}>
      <img src="/img/user.png" alt="usuario" />
    </div>
  )
}

export default Photo