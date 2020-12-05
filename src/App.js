import logo from "./logo.svg";
import "./App.css";
import ContactList from "./components/contact-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Contact List </h2>
        <ContactList />
        {/* import and show Contact List Component in here */}
      </header>
    </div>
  );
}

export default App;
