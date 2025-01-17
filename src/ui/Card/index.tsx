import style from './Card.module.scss'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={style.areaCard}>
      <div className={style.card}>{children}</div>
    </section>
  )
}

export default Card
