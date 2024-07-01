import './App.css';
import Router from "./Router";
import IconeLogin from './components/IconeLogin';
import MenuBar from "./components/MenuBar/index";
import logo from "./img/logoM.png";

function App() {

  return (
    <div className='body'>
      <div className='corpo'>
        <header className='cabecalho'>
          <nav>
            <div className='cabecalho-corpo'>
              <a href='/home'>
                <img className='logo' src={logo} alt='Logo'/>
              </a>
              <div className='item-list'>
                <div className='item-usuario'>
                  <IconeLogin />
                </div>
                <div className='item-carrinho'>
                  <a href='/carrinho'>Meu carrinho</a>
                </div>
              </div>
            </div>
            <MenuBar/>
          </nav>
        </header>
        <div className='router'>
          <Router/>
        </div>
        <footer className='footer'>
          <p>Desenvolvido por Gustavo Goulart</p>
        </footer>
      </div>
    </div>
  )
}

export default App;
