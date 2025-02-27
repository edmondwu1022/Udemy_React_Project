import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from './pages/Home'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Header from "./components/Header"

export default function App() {
  return <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} hand />
        <Route path="/offers" element={<Offers />} hand />
        <Route path="/profile" element={<Profile />} hand />
        <Route path="/sign-in" element={<SignIn />} hand />
        <Route path="/sign-up" element={<SignUp />} hand />
        <Route path="/forgot-password" element={<ForgotPassword />} hand />
      </Routes>
    </Router>
  </>
}