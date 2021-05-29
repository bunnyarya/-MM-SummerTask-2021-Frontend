import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import Menu from "./Menu";
import Tut from "./tut";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="primary-heading">
        <h1>MONDAY MORNING</h1>
        <div className="alignheading">
          <h4>Create|</h4>
          <h4> Inspire|</h4>
          <h4> Lead</h4>
        </div>
      </div>
      <Menu />
      <Tut />
    </div>
  );
}

export default App;

//  <Button variant="contained">Default</Button>
//       <Button variant="contained" color="primary">
//         Primary
//       </Button>
//       <Button variant="contained" color="secondary">
//         Secondary
//       </Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" color="primary" href="#contained-buttons">
//         Link
//       </Button>

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
