import { useEffect, useCallback, useState } from "react";


export default function List({getItems}){
    

    return (
          getItems.map(item=><div>{item}</div>)
    )
  // return items.map(item=> <div>{item}</div>)    
    
}