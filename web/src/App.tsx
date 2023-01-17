
import './App.css'
import { Habit } from './components/Habit'

function App() {
  return (
      <div>
        <Habit completed={3}></Habit>
        <Habit completed={30}></Habit>
        <Habit completed={20}></Habit>
        <Habit completed={13}></Habit>
      </div>
  )
}

export default App


//Componente: Reaproveitar / isolar
//Propriedade: Informação enviada pra modificar um componente visual ou comportamentalmente