import { useState } from "react"

const Counter = () => {

    const [calculate, setCalculate] = useState<number>(0)
  return (
    <>
    <h3>{calculate}</h3>
    <br></br>
    <button onClick={()=>{setCalculate(calculate+1)}}>+</button>
    <button onClick={()=>{setCalculate(calculate-1)}}>-</button>
    </>
  )
}

export default Counter