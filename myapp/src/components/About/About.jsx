import style from './About.module.css'

export default function About(params) {
    return(
    <div className={style.counter} >
    <div >
        <h2 >
            <span >
                Un poco sobre mi y mis sueños en esta empresa:
            </span>
        </h2>
        <p>
            No, no soy un robot, solo un joven de 21 años con muchas metas y sueños por delante, viendo y viviendo la prueba, aspiro y estoy seguro de que nunca dejarán de desafiar mi conocimiento y mi compresión para hacer que tanto ustedes como empresa y yo como programador, actualmente me encuentro estudiando en las noches, en un horario muy nocturno y con aspiraciones de estudiar inglés también, no hay mucho más que contar aparte de que no puedo parar de pensar en que esta prueba por más canas que me hizo sacar, siepre fue un placer hacerla, gracias OPA.
        </p>
    </div>
    <div>
        <img className={style.yo} src="https://res.cloudinary.com/dpssouwww/image/upload/v1692917665/imagenes/fgap7xr3afoqtmgytllr.jpg" alt="Me"/>
    </div>
    </div>
    )
}