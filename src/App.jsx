import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from './pages/Home'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

export default function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} hand />
        <Route path="/Offers" element={<Offers />} hand />
        <Route path="/Profile" element={<Profile />} hand />
        <Route path="/Sign-In" element={<SignIn />} hand />
        <Route path="/Sign-Up" element={<SignUp />} hand />
        <Route path="/Forgot-Password" element={<ForgotPassword />} hand />
      </Routes>
    </Router>
  </>
}