import { useState } from "react"

const Counter = () => {

    const [calculate, setCalculate] = useState<number>(0)
  return (
    <>
    <div>
    
        <h3>{calculate}</h3>
        <button onClick={()=>{setCalculate(calculate+1)}}>+</button>
        <button onClick={()=>{setCalculate(calculate-1)}}>-</button>
    
    </div>
    </>
  )
}

export default Counter