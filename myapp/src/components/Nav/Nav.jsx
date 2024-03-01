import { Link } from "react-router-dom"
import style from './Nav.module.css'

export default function Nav() {
    return(
        <div className={style.counter}>
          <ul className={style.list}>
             <li><Link className={style.linkNS} to="/">Inicio</Link></li>
             <li><Link className={style.linkNS} to="/calculate">Calculadora</Link></li>
             <li><Link className={style.linkNS}  to="/about">Sobre mi</Link></li>
          </ul>
        </div>
    )
}