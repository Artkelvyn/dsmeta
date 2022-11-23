import Cabecalho from "./components/header"
import Salescard from "./components/Salescard"

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
      <Salescard />
          </div>

        </section>
      </main>
    </>
  )

}

export default App
