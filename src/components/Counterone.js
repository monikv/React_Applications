import React,{useState} from 'react';

function Counterone()
{
 const [count,setcount]=useState(0);
    return(
    <div>
        <h1> Count: {count}</h1>
        <button onClick={()=>setcount(count+1)} >Increment by 1</button>

    </div>

    )
    
}

export default Counterone;