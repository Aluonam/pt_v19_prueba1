import './App.css'
import Counter from './components/Counter'
import PokeTable from './components/PokeTable'

function App() {

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
        <Counter></Counter>
      
        <PokeTable></PokeTable>
      </div>
      
    </>
  )
}

export default App
