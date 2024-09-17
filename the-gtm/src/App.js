import Footer from './main_pages/Footer';
import NavBar from './main_pages/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PopularCourses from './pages/PopularCourses';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Resetpassword from './pages/Resetpassword';
import Home from './main_pages/Body';
import Projects from './pages/Projects';
import Programs from './pages/Programs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/PopularCourses" element={<PopularCourses />} />
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset-password" element={<Resetpassword />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/Events" element={<Events />} />
            <Route exact path="/Programs" element={<Programs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </main>


        <Footer />
      </div>
    </Router>
  );

}

export default App;
