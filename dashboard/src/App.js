import { Header } from './components/Header'
import './assets/styles/main.css'
import { Card } from './components/Card'

function App() {
  const a = 'Dashboard Kit'
  return (
    <>
      <Header>{a}</Header>
      <Card></Card>
    </>
  )
}

export default App
