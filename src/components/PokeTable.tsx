import { useEffect, useState } from "react"


type pokeTablePropstype = {
    name:  string,
    url: string
}


const PokeTable = () => {

    const [dataPokemon, setDataPokemon] = useState<pokeTablePropstype>({
        name: '',
        url: '',
    })

    useEffect(() => {
      
        
        callPokemonData()
    }, [])

    const callPokemonData = async ()=>{
            const callURL = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data =  await callURL.json()
            console.log(data.results)
            
        }



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
            <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PokeTable