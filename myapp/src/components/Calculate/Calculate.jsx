import { useState } from "react"

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
        let update = [...respuesta]
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
        <div>
            <h3>Peso máximo</h3>
            <input type="number" placeholder="Peso" value={peso} onChange={hanPes}/>
            <br />
            <h3>Calorias minimas</h3>
            <input type="number" placeholder="Calorias" value={calorias} onChange={hanCal}/>
            <br />
            <button onClick={calculateObj}>Calcular</button>
            <br />
            {console.log(respuesta)}
            <br />
            {
                arrPrueb.map(({name,peso,calorias})=>{
                    return(
                        <div>
                          <div>{name}</div>
                          <h4>Peso: {peso}</h4>
                          <h4>Calorias:{calorias}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}