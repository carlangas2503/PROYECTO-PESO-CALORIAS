import style from './Card.module.css'

export default function Card({name,peso,calorias}) {
    return(
        <div className={style.cotainer} >
            <div>{name}</div>
            <h4>Peso: {peso}</h4>
            <h4>Calorias:{calorias}</h4>
        </div>
    )
}