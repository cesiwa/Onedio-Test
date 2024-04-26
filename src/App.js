import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <div className="App flex justify-center align">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
