import './App.css';
import ValueCurve from './components/ValueCurve';
import Example from './components/ExampleComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header colored">
        <ValueCurve/>
      </header>
    
      <Example />
    </div>
  );
}

export default App;
