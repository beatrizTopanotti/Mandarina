import './App.css';
import Router from "./Router";
import MenuBar from "./components/MenuBar/index";
import logo from "./img/logo.png";

function App() {

  return (
    <div className="body">
      <div className="corpo">
        <header className="cabecalho">
          <div className="logo">
            <img src={logo} alt="Logo"/>
            <div className="item-usuario">

              </div>
            <div className="item-carrinho">
              
            </div>
          </div>
          <MenuBar/>
        </header>
        <Router/>
      </div>
    </div>
  )
}

export default App;
