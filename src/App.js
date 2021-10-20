import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const greet = 'Y aqui irian los items... si tan solo tuviera alguno!!! :c';
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greet} />
    </div>
  );
}

export default App;
