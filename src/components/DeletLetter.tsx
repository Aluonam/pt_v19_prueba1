


const DeletLetter = () => {
  return (
    <div>

        <input placeholder="Write your sentence" onChange={(e)=>{e.target.value}}></input>
        <input placeholder="Write one letter" type="text" maxLength={1} size={1}></input>

    </div>
  )
}

export default DeletLetter