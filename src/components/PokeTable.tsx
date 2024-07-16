import { useEffect, useState } from "react"


export interface pokePropstype {
    name:  string;
    url: string
}

const PokeTable = () => {

    const [dataPokemon, setDataPokemon] = useState<pokePropstype[]>()

    useEffect(() => {
      
        
        callPokemonData()
    }, [])

    const callPokemonData = async ()=>{
            const callURL = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data =  await callURL.json()
            setDataPokemon(data.results)
        }

    const handleShowData = dataPokemon?.map((onePokemon: pokePropstype)=>{

        return(
            <tr key={onePokemon.name}>
                <td>{onePokemon.name}</td>
                <td><a href="onePokemon.url">{onePokemon.url}</a></td>
            </tr>
        )
    })



  return (
    <div>PokeTable

        <table>
            <thead>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
            </thead>
            <tbody>
                {handleShowData}
            </tbody>
        </table>
    </div>
  )
}

export default PokeTable