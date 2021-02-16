import Tree from './tree';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Family Tree</h2>
      </header>
      <main>
        <Tree data={data} />
      </main>
    </div>
  )
};

export default App;
