import { useState } from "react"


const ReplaceSpace = () => {

    const [userSentence, setUserSentence] = useState<string>()

    const handleChangeSentence = ()=>{
        const newSentece = userSentence?.split(' ').join('_')
        setUserSentence(newSentece)
    }
     

  return (
    <>
    <div>
        <input placeholder="Write your sentence" onChange={(e)=>{setUserSentence(e.target.value)}}></input>
        <button onClick={()=>{handleChangeSentence()}}>change space</button>
        <br></br>
        {userSentence}
    </div>
    
    </>
  )
}

export default ReplaceSpace