// import Mood from "./Mood"
import Header from "./Header"
import Body from "./Body"
import Button from "./Button"
import Mood from "./Mood"


function App() {

  return (
    <>
    <Button />
    <Header />
    <Body />
      <h1>Props</h1>
      <Mood hari="Senin" mood="Biasa"/>
      <Mood hari="Jumat" mood="Senang"/>
    </>
    

  )
}

export default App