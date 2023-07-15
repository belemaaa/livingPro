import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Landing from './components/Landing';
import Splash from "./components/Splash";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Splash/>} />
          <Route path='/onboarding2' element={<Onboarding2/>} />
          <Route path='/onboarding3' element={<Onboarding3/>} />
          <Route path='/onboarding3' element={<Onboarding3/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
