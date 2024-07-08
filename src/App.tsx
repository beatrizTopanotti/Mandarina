import path from 'path';
import './App.css';
import Router from "./Router";
import CarrinhoDrawer from './components/CarrinhoDrawer';
import IconeLogin from './components/IconeLogin';
import MenuBar from "./components/MenuBar/index";
import logo from "./img/logoM.png";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


function App() {

  return (
    <div className="body">
      <div className="corpo">
        <header className="cabecalho">
          <div className="cabecalho-corpo">
            <img className="logo" src={logo} alt="Logo" />
            <div className="item-usuario">
              <IconeLogin/>
              </div>
            <div className="item-carrinho">
              <CarrinhoDrawer/>
            </div>
          </div>
          <MenuBar/>
        </header>
        <div className='router'>
        <Router/>          
        </div>
        <footer className='footer'>
        <p>com muito café e reza braba, saiu alguma coisa... por biabia</p>
        </footer>
      </div>
    </div>
  )
}

export default App;
