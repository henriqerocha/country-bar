import logo from './logo.svg';
import './App.css';
import './scripts';
import Header from './componentes/header';
import Carrousel from './componentes/carrousel';
import Conteudo from './componentes/conteudo';

function App() {
  return (
    <div className="container">
      <aside className='icone-contato'>
                <img src='./assets/wpp-icon.png'></img>
            </aside>
      <Header/>
      <Carrousel/>
      <Conteudo/>
    </div>
  );
}

export default App;
