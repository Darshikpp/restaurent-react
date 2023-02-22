
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restlist from './components/Restlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      
      <Restlist/>
      <Footer/>
    </div>
  );
}

export default App;
