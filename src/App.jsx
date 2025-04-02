import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import TicketForm from "./Pages/TicketForm";
import TicketGenerate from "./Pages/TicketGenerate";

function App() {
  return (
    <div className="mainbody">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TicketForm />} />
          <Route path="/ticket" element={<TicketGenerate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
