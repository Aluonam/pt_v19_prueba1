import { useState } from "react"


type pokeTablePropstype = {
    name:  string,
    url: string
}


const PokeTable = () => {

    const [dataPokemon, setDataPokemon] = useState<pokeTablePropstype>({
        name: '',
        url: '',
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