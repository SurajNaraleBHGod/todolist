import { useState , useEffect, useCallback, useMemo} from 'react'
import './App.css'
import List from './List.jsx'
import Reducer from './Reducer.jsx'

function App() {

  const [number , setNumber]= useState(1)
  const [dark , setDark] = useState(false)
  const [items , setItems]= useState([])

  const getItems=useCallback(()=>{
    return [number , number+1 ,number+2]
  },[number])
  useEffect(()=>{

    setItems(getItems())
    console.log('updating items...')

},[getItems])

  const theme={
    backgroundColor : dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }
  

  function getSlow(){

    for(let i=0;i<=10;i++){ console.log(i)}
    return number*2;
  }
  let data=useMemo(getSlow,[number])

  return (
  

        <div style={theme}>

          <input 
            className="border-black border-4"
            type='number'
            value={number}
            onChange={e=> setNumber(parseInt(e.target.value))}
          />
          <button onClick={()=> setDark(prev => !prev)}> Toggle Theme </button>

           <List getItems={items}/>
          <div>
          <h1 className="text-lg font-bold">Creating Example Of useMemo and useCallback </h1>
          {data}

          </div>


          <Reducer/>
          

        </div>

      
  
  )
}

export default App
