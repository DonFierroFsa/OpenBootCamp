import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF.jsx";
import TaskListComponent from "./components/container/task_list";
import ComponenteA from "./components/pure/ComponenteA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componenente propio Greeting.jsx */}
        <Greeting name="Adrian"></Greeting>
        <GreetingF name="Adrian"></GreetingF>
        <TaskListComponent></TaskListComponent>
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
