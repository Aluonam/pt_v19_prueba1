import { useState } from "react"



const DeletLetter = () => {

    const [userSentence, setUserSentence] = useState<string>()
  return (
    <div>

        <input placeholder="Write your sentence" onChange={(e)=>{setUserSentence(e.target.value)}}></input>
        <input placeholder="Write one letter" type="text" maxLength={1} size={1}></input>
        {userSentence}

    </div>
  )
}

export default DeletLetter