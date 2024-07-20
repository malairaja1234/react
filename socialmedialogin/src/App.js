import './App.css';
import Login from './components/Login';
import Profile from './components/profile';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
