import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [grau, setGrau] = useState('...');

  useEffect( () => {
    console.log('componente montou')

    calcIMC()

    console.log(`peso: ${peso}, tipo:${typeof peso}`)
    console.log(`altura:${altura} tipo:${typeof altura}`)
    console.log(`imc:${imc} tipo:${typeof imc}`)
    console.log(grau)


  }, [peso, altura])

  function calcIMC(){
    setImc((peso*10000)/(altura * altura))

    if ( imc < 18,5 ){
      setGrau('abaixo do peso')
    }
    
    if (imc > 18,5) {
      setGrau('com o peso normal')
    }
    
    if (imc > 25){
      setGrau('com excesso de peso')
    }
    
    if (imc > 30) {
      setGrau('com Obesidade classe I')
    }
    
    if (imc > 35) {
      setGrau('com Obesidade classe II')
    }
    
    if (imc >= 40){
    setGrau('com Obesidade classe III')
    }
    
  }



  return (
    <>
    <div>
      <h2>Peso (kg)</h2>
      <input type="number" onChange={e => setPeso(parseInt(e.target.value))} />
    </div>
    <br />
    <div>
      <h2>Altura (cm)</h2>
      <input type="number" onChange={e => setAltura(parseInt(e.target.value))}/>
    </div>
    <br />
    <div>
      <h1>Seu IMC é:</h1>
      <h1>{imc.toFixed(2)}</h1>
      <h2>Voce está {grau}</h2>
    </div>

    </>
  )
}

export default App
