
import Home from "../page/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import data from "../assets/logements.json"


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
