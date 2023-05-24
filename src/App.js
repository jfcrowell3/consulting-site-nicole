import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home id='home' />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
