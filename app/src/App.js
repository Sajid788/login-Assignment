import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Dashbord from './Dashbord';

function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {< Navigate to = "/login"/>}/>
        <Route path = "/register" element = {< Register/>}/>
        <Route path = "/login" element = {< Login/>}/>
        <Route path = "/dashboard" element = {isAuthenticated ?
         <Dashbord/> : <Navigate to = "/login"/>}/>

      </Routes>
    </Router>
  );
}

export default App;
