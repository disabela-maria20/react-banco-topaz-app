import style from './Extrato.module.scss'
import { UI } from '../../ui'
import { Profile } from '../../components'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getExtract } from '../../services/resquest'
import { useMoney } from '../../hook/useMoney'


function formatDate(inputDate: string): string {
  const targetDate = new Date(inputDate)
  const day = String(targetDate.getDate()).padStart(2, "0")
  const month = String(targetDate.getMonth() + 1).padStart(2, "0")
  const year = targetDate.getFullYear()
  const hours = String(targetDate.getHours()).padStart(2, "0")
  const minutes = String(targetDate.getMinutes()).padStart(2, "0")

  return `${day}/${month}/${year} ${hours}:${minutes}`
}

const Extrato = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => getExtract()
  })

  return (
    <UI.Card>
      {isPending && <p>Carregando...</p>}
      {isError && <p>Opss, ocorreu um erro!</p>}
      {!isPending && <section className={style.Transfer}>
        <div className={style.data}>
          <div className={style.profile}>
            <div className={style.flex}>
              <Profile.Photo />
              <div>
                <Profile.Name />
                <Profile.Balance />
              </div>
            </div>
            <NavLink to={'/home'}>Voltar</NavLink>
          </div>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data) => (
              <tr key={data.id}>
                <td scope="row">{formatDate(data.schedule ?? '')}</td>
                <td>{data.name}</td>
                <td>{useMoney(data.transferValue)}</td>
                <td>{data.id_transfers ? 'Agendado' : 'Enviado'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>}
    </UI.Card>
  )
}

export default Extrato