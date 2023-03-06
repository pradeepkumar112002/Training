import { useState } from "react";


function Comp5(){
    const[inc,setInc] = useState(0);
    function increase(){
        return setInc(inc+1)
    }
    return(
        <>
        <h1>Buy a Product  {inc}</h1>
        <button onClick={increase}>Click on me to <br/> Buy a Product</button>
        </>
    )
}

export default Comp5;