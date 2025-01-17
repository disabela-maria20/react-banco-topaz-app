import Style from './Bg.module.scss'

const Bg = ({ children }: { children: React.ReactNode }) => {
  return <section className={Style.bg}>{children}</section>
}

export default Bg
