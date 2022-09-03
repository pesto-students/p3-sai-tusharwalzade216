import { BrowserRouter } from "react-router-dom";

import './App.css';

import { AppRoutes } from "./routes";
import { AppBar } from "./components/organisms";


function App() {
  return (
    <div className="App">
      <AppBar />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
