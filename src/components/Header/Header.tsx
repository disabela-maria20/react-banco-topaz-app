import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.logo}>Banco XYZ</div>
          <div className={style.sair}>Sair</div>
        </div>
      </div>
    </header>
  )
}

export default Header
