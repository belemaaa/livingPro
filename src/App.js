import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Landing from './components/Landing';
import Splash from "./components/Splash";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Splash/>} />
          <Route path='/onboarding2' exact element={<Onboarding2/>} />
          <Route path='/onboarding3' exact element={<Onboarding3/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
