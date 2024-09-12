import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "./pages/landingPage";
import Dashboard from './pages/dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
