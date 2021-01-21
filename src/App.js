import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/Clock/Clock";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome name="Greg" />
      <Clock />
      <Contact />
      <h2>Welcome To React!</h2>
    </div>
  );
}

export default App;
