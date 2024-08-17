import { useState } from "react"



const DeletLetter = () => {

    const [userSentence, setUserSentence] = useState<string>('')
    const [userLetter, setUserLetter] = useState<string>('')

    const handleDelLet = ()=>{
        const delLet = userSentence.replaceAll(userLetter, '')
        setUserSentence(delLet)
    }

  return (
    <div>
        <input placeholder="Write your sentence" onChange={(e)=>{setUserSentence(e.target.value)}}></input>
        <input placeholder="Write one letter" type="text" maxLength={1} size={1} onChange={(e)=>{setUserLetter(e.target.value)}}></input>
        <button onClick={()=>{handleDelLet()}}>click for delete</button>
        {userSentence}
    </div>
  )
}

export default DeletLetter