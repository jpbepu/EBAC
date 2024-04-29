import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  useEffect( () => {
    console.log('componente montou')
    console.log(`peso: ${peso}, tipo:${typeof peso}`)
    console.log(`altura:${altura} tipo:${typeof altura}`)
    calcIMC()
    console.log(`imc:${imc} tipo:${typeof imc}`)

  }, [peso, altura])

  function calcIMC(){
    setImc((peso*10000)/(altura * altura))
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
      <h1>Seu IMC e:</h1>
      <h1>{imc.toFixed(2)}</h1>
    </div>

    </>
  )
}

export default App
