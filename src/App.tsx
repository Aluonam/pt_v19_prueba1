import './App.css'
import Counter from './components/Counter'
import PokeTable from './components/PokeTable'
import ReplaceSpace from './components/ReplaceSpace'

function App() {

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
        <Counter></Counter>
      
        <PokeTable></PokeTable>

        <ReplaceSpace></ReplaceSpace>
      </div>
      
    </>
  )
}

export default App
