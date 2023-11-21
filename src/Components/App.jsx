
import Home from "../page/Home"
import data from "../assets/logements.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home data={data} />} />
            </Routes>
    </Router>
  );
}

export default App;
