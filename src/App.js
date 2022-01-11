import logo from './logo.svg';
import './App.css';
// run npm install react-bootstrap bootstrap@5.1.3 and add line below
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="container">
      <div>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
      </div>

      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>

  );
}

export default App;
