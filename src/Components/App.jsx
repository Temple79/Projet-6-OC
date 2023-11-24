
import Home from "../page/Home"
import About from "../page/About"
import Error from "../page/Error"
import data from "../assets/logements.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Logement from "../page/Logement"


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/about" element={<About  />} />
                <Route path="/logement/:id" element={<Logement data={data}/>} />
                <Route path="*" element={<Error />} />
            </Routes>
    </Router>
  );
}

export default App;
