import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import GreetingStyle from './components/pure/greetingStyle';
import ClockRfc from './components/pure/clock.rfc';
import Father from './components/container/father';
import ContactList from './components/container/contact_list';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
            {/* <Ejemplo4 name="Adrian">
              <h3>Contenido del props.children</h3>
              <h3>Mas contenido Children</h3>
            </Ejemplo4> */}
            <ContactList></ContactList>
            {/* <GreetingStyle name="Adrian"></GreetingStyle> */}
            {/* <ClockRfc></ClockRfc> */}
            {/* <Father></Father> *Gestion de eventos */}
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;
