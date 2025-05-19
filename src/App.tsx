import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import RootLayout from "./components/RootLayout"
// import Home from "./pages/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Accordion from "./pages/Accordion"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

/**
 * Browser Router: It is a router provider that uses the HTML5 History API to keep the UI in sync with the URL.
 * Think of Routes as a container for all your route definitions.
 * Each Route defines a path-to-component mapping.
 */

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Accordion />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/accordion" element={<Accordion />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
