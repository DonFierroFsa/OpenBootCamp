import logo from './logo.svg';
import './App.css';
import ComponentA from './components/pure/componentA';

function App() {
  const adrian={
    nombre:"Adrian",
    apellido:"Rivira",
    email:"riviraÿ@gima.com",
    estado:true,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ComponentA contacto={adrian}></ComponentA>
        </div>
      </header>
    </div>
  );
}

export default App;
