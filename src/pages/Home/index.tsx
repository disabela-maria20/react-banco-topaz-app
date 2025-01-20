import style from './Home.module.scss'

import { UI } from '../../ui'
import { Profile } from '../../components'
import { useUser } from '../../hook/useUser';

import { NavLink } from "react-router-dom";

const Home = () => {
  const { isPending, error } = useUser();

  return (
    <UI.Card>
      {isPending && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro...</p>}
      {!isPending && <section className={style.Profile}>
        <div className={style.data}>
          <Profile.Photo />
          <Profile.Name />
        </div>
        <div className={style.saldo}>
          <h3>Saldo Atual</h3>
          <div className={style.flex}>
            <div className={style.carteira}>
              <img src="/img/carteira.png" alt="carteira" />
              <Profile.Balance  />
            </div>
            <nav className={style.link}>
              <NavLink to={'/transferir'}>transferir</NavLink>
              <NavLink to={'/extrato'}>extrato</NavLink>
            </nav>
          </div>
        </div>
      </section>}
      
    </UI.Card>
  )
}

export default Home
