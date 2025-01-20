import style from './Extrato.module.scss'
import { UI } from '../../ui'
import { Profile } from '../../components'

const Extrato = () => {
  
  return (
    <UI.Card>
      <section className={style.Transfer}>
        <div className={style.data}>
          <div className={style.profile}>
            <Profile.Photo />
            <div>
              <Profile.Name />
              <Profile.Balance />
            </div>
          </div>
        </div>
      
      </section>
    </UI.Card>
  )
}

export default Extrato