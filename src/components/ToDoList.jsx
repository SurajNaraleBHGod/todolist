import { useState, useReducer } from 'react';
import List from './List.jsx';

const DAYS=[]

export const ACTION = {
    ADD: 'add',
    DELETE: 'delete',
    TOGGLE: 'toggle',
};

function reducer(state, action) {
    switch (action.type) {

        case ACTION.ADD:
            let d=new Date();
            let date=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
           // console.log(action.payload.duedate)
            console.log(action)
            return [...state, { name: action.payload.name, id: Math.floor(Math.random()*1000000000), complete: false,date:date,dueDate:action.payload.duedate }];


        case ACTION.TOGGLE:
            //console.log(state)
            return state.map((e) => {
                if (e.id === action.id) {
                    return {...e,complete:!e.complete}
                }
             //  console.log(e)
                return e;
            });
        case ACTION.DELETE:
            return state.filter((e)=>{
                if(e.id!=action.id)
                    return e   
            })
        
        default:
            return state;
    }
}

export default function ToDoList() {
    const [name, setName] = useState('');
    const [date,setDate] = useState('');
    const [state, dispatch] = useReducer(reducer, []);

    function addJob() {
        if(date === undefined)
        {
            let d=new Date();
            let date=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()   
        }
      
        dispatch({ type: ACTION.ADD, payload: {name:name ,duedate:date} });
    }

    return (
        <div className='border-2'>
            Enter The Job: 
            <input className='border-2 w-9/12' type="text" onChange={(e) => setName(e.target.value)} />
            <button className='border-2 bg-green-500 text-white' onClick={addJob}>Add</button>
            <input type='date' onChange={(e)=>{setDate(e.target.value)}}></input>
           
            <></>
            
            <table className="border-2 w-full">
            <tr> 

                <th>Job To do</th>
                <th>Date</th>
                <th>DueDate</th>
                <th>status</th>
                <th>Delete</th>
            </tr>

            {state.map((obj) => (
                <List key={obj.id} state={obj} dispatch={dispatch} />
            ))}
            </table>
            
           
        </div>
    );
}
