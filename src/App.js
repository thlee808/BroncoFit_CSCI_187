import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Workout from "./pages/Workout";
import Navbar from "./components/Navbar";
import Protected from './components/Protected';
import ChatPage from "./pages/ChatPage";
import "./style.scss";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={ <Protected><Home /></Protected> } />
          <Route path='/profile' element={ <Protected><Profile /></Protected> } />
          <Route path='/chatpage' element={ <Protected><ChatPage /></Protected> } />
          <Route path='/workout' element={ <Protected><Workout /></Protected> } />
          <Route path='/editprofile' element={ <Protected><EditProfile /></Protected> } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
