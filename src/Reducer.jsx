import { useState , useReducer } from "react"

const action={INC:'increment',DEC:'decrement'}

function reduce(state , action){

   
   if(state.isAd)
   return { count :state.count+1}
   return { count :state.count-1}

}

export default function Reducer(){

    const [count , setCount] = useState(0)

    const [state , dispatch]= useReducer(reduce,{count:0,isAd:true})

    
   function inc(){
        state.isAd=true;
        
        dispatch({type:action.INC,isCompleted:false})
   }

   function dec(){
    state.isAd=false
    dispatch()

   }
  
  
    
    

    return (
    <>
         <div>
            <button className="bg-black text-white h-10 w-10 m-2" onClick={()=>{inc() } }>+</button>
            {state.count}
            <button className="bg-black text-white h-10 w-10 m-2"onClick={()=> {dec() } } >-</button>
        </div>

        <div>
            <button className="bg-black text-white h-10 w-10 m-2" onClick={()=>{ setCount(p => ++p)} }>+</button>
            {count}
            <button className="bg-black text-white h-10 w-10 m-2"onClick={()=> { setCount(p => --p)}} >-</button>
        </div>


    </>
       
    )
}