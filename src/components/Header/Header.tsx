import style from './Header.module.scss'

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hook/useAuth'

const Header = () => {
  const user = useAuth()
  const navigate = useNavigate();

  const logout = () => {
    user.logout()
    navigate('/')
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.grid}>
          <h2 className={style.logo}>Banco XYZ</h2>
          {user.isAuthenticated && <button className={style.sair} onClick={logout}>Sair</button>}
        </div>
      </div>
    </header>
  )
}

export default Header
