import { Link } from "react-router-dom";
import style from './Landing.module.css'

export default function Landing() {
    return(
        <div className={style.counter}>
            <p className={style.text}>Prueba tecnica OPA</p>
            <Link to='/calculate'><button className={style.go}>Iniciar</button></Link>
        </div>
    )
}