
const ACTION = {
    ADD: 'add',
    DELETE: 'delete',
    TOGGLE: 'toggle',
};



export default function List({ state, dispatch }) {
    return (
        <tr style={{ color: state.complete ? 'white' : 'black',backgroundColor:state.complete?'green':'LightGray' }}>
      
           
          <td> {state.name} </td> 
          <td className="px-48"> {state.date}</td>
          <td classNAme="px-48"> {state.dueDate}</td>
          
          <td>  <button className="px-48" onClick={() => dispatch({ type: ACTION.TOGGLE, id: state.id })}>{state.complete?'complete':'pending'}</button></td> 
          <td>  <button className="" onClick={() => dispatch({ type: ACTION.DELETE, id: state.id })}>Delete</button></td> 
      
        </tr>
    );
}
