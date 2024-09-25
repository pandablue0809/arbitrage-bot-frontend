import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import Header from "./components/header";
import Firstpage from "./pages/firstpage";
import Dashboard from "./pages/dashboard";
import Controller from "./pages/trading";
import Transaction from "./pages/transaction";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Firstpage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/controller" element={<Controller />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
