import logo from './logo.svg';
import './App.css';
import './scripts';
import Header from './componentes/header';
import Conteudo from './componentes/conteudo';
import Footer from './componentes/footer';

function App() {
  
  return (
    <div className="container">
      <aside className='icone-contato'>
                <img src='./assets/wpp-icon.png'></img>
            </aside>
            
      <Header/>
      <Conteudo/>
      <Footer/>
      
    </div>
  );
}

export default App;
