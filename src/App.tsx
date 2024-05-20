import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Profile } from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-500">Hello world!</h1>
        <ConnectButton />
        <Profile />
      </header>
    </div>
  );
}

export default App;
