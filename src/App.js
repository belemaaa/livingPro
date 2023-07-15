import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Landing from './components/Landing';
import Splash from "./components/Splash";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Splash/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
