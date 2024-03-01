import { useState } from "react"
import style from './Calculate.module.css'
import Card from "../Card/Card"

export default function Calculate(params) {
    const [peso,setPeso] = useState(0)
    const [calorias,setCalorias] = useState(0)

    const [respuesta,setRespuesta] = useState([{peso:0,calorias:0}])

    const arrPrueb = [
        {
            name:'E1',
            peso:5,
            calorias:3
        },
        {
            name:'E2',
            peso:3,
            calorias:5
        },
        {
            name:'E3',
            peso:5,
            calorias:2
        },
        {
            name:'E4',
            peso:1,
            calorias:8
        },
        {
            name:'E5',
            peso:2,
            calorias:3
        }
    ]
    
    const calculateObj=()=>{
        let update = [{peso:0,calorias:0}]
        if(!peso || !calorias) return alert('ambos campos deben de estar llenos y con numeros mayores a 0')
        let condicional  = true
        arrPrueb.sort((a,b)=>{
            return   b.calorias - a.calorias
        })
        while(condicional){
            for(let i = 0;i < arrPrueb.length;i++){
                const currentPeso = update.reduce((acu,ele)=>acu+ele.peso,0)
                const currentCalo = update.reduce((acu,ele)=>acu+ele.calorias,0)
                if(peso >= arrPrueb[i].peso + currentPeso){
                    update = [...update,arrPrueb[i]]
                    continue;
                }
                if(calorias <= currentCalo) break;
            }
            condicional = false
        }
        update.shift()
        setRespuesta(update)
    }
    const hanPes = (e) => {
        setRespuesta([{peso:0,calorias:0}])
        setPeso(e.target.value)
    }
    const hanCal =(e)=>{
        setRespuesta([{peso:0,calorias:0}])
        setCalorias(e.target.value)
    }
    return(
        <div className={style.allcontain}>
            <div className={style.cotainerinputs}>
                <div>
                    <span>Peso máximo</span>
                    <input 
                    className={style.text} 
                    type="number" 
                    value={peso} 
                    onChange={hanPes}/>
                </div>
                <div>
                    <span>Calorias minimas</span>
                    <input 
                    className={style.text} 
                    type="number"
                    value={calorias} 
                    onChange={hanCal}/>
                </div>
                <button 
                className={style.calcular} 
                onClick={calculateObj}
                >Calcular</button>
            </div>
            <br />
            {respuesta[0].name?<h2 className={style.titulos} >Respuesta</h2>:null}
            <div className={style.countCards} >
                {
                    respuesta[0].name?respuesta.map(({name,peso,calorias})=>{
                        return(<Card 
                            name={name} 
                            peso={peso} 
                            calorias={calorias} />)                
                    }):null
                }                
            </div>

            <br />
            <br />
            <h2 className={style.titulos} >Elementos</h2>
            <div className={style.countCards} >
                {
                    arrPrueb.map(({name,peso,calorias})=>{
                        return(<Card 
                            name={name} 
                            peso={peso} 
                            calorias={calorias} />)
                    })
                }
            </div>

        </div>
    )
}