import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Landing from './components/Landing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
