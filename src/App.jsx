import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Tasklist";
function App() {
  return (
    <div className="app w-full h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Tasklist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
