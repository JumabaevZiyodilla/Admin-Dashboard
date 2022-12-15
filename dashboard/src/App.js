import { Header } from './components/Header'
import './assets/styles/main.css'
import { Card } from './components/Card'
import Main from './components/Hero/Main/Main'
import List from "./components/Hero/Task/Item"


function App() {
  const a = 'Dashboard Kit'
  return (
    <>
      <Header>{a}</Header>
      <Card></Card>
      <Main />
      <List />
    </>
  )
}

export default App
