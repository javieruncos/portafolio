import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from './components/view/Inicio'
import Menu from './components/common/Menu';

function App() {

  return (
    <>
      <div className='App'>
        <div className='capa'>
          <div className='Inicio'>
            <Menu></Menu>
            <Inicio></Inicio>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
