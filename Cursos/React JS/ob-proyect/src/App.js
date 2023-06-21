import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import GreetingStyle from './components/pure/greetingStyle';

import ClockRfc from './components/pure/clock.rfc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {/* <Ejemplo4 name="Adrian">
              <h3>Contenido del props.children</h3>
              <h3>Mas contenido Children</h3>
            </Ejemplo4> */}
            {/* <TaskListComponent></TaskListComponent> */}
            <ClockRfc></ClockRfc>
        </div>
      </header>
    </div>
  );
}

export default App;
