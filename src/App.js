import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Landing from './components/Landing';
import Splash from "./components/Splash";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import Home from "./components/Home";
import Signup from "./components/Signup";
import EmailVerification from "./components/EmailVerification";
import AboutInfo from "./components/AboutInfo";
import Login from "./components/Login";
import CompatibilityTest1 from "./components/CompatibilityTest1";
import CompatibilityTest2 from "./components/CompatibilityTest2";
import CompatibilityTest3 from "./components/CompatibilityTest3";
import CompatibilityTest4 from "./components/CompatibilityTest4";
import CreatePost from "./components/CreatePost";
import Discover from "./components/Discover";
import Inbox from "./components/Inbox";
import Profile from "./components/Profile";
import StartPost from "./components/StartPost";
import ImageUploadTest from "./components/ImageUploadTest";
import Matches from "./components/Matches";
import Chat from "./components/Chat";
import ChatDemo from "./components/ChatDemo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Splash/>} />
          <Route path='/onboarding2' element={<Onboarding2/>} />
          <Route path='/onboarding3' element={<Onboarding3/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/email_verification' element={<EmailVerification/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/about' element={<AboutInfo/>}/>
          <Route path="/compatibility_test_1" element={<CompatibilityTest1/>}/>
          <Route path="/compatibility_test_2" element={<CompatibilityTest2/>}/>
          <Route path="/compatibility_test_3" element={<CompatibilityTest3/>}/>
          <Route path="/compatibility_test_4" element={<CompatibilityTest4/>}/>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/post" element={<CreatePost/>}/>
          <Route path="/start_post" element={<StartPost/>}/>
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/test" element={<ImageUploadTest/>}/>
          <Route path="/matches" element={<Matches/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/chat_demo" element={<ChatDemo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
