import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.grid}>
          <h2 className={style.logo}>Banco XYZ</h2>
          <div className={style.sair}>Sair</div>
        </div>
      </div>
    </header>
  )
}

export default Header
