import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Workout from "./pages/Workout";
import Navbar from "./components/Navbar";
import Protected from './components/Protected';
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
          <Route path='/workout' element={ <Protected><Workout /></Protected> } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
