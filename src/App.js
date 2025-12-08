import './App.css';
import Click from './components/Click';
import ComplexStateArray from './components/ComplexStateArray';
import Header from './components/Header';
import Main from './components/Main';
import No_state from './components/No_state';
import Ternary from './components/Ternary';

function App() {
  return (
    <div className="App-container">
      <Header />
      <Main />
      {/* <Click /> */}
      {/* <No_state /> */}
      {/* <Ternary /> */}
      <ComplexStateArray />
    </div>
  );
}

export default App;
