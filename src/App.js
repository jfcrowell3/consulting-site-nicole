import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Features/Header';
import NavBar from './Components/NavBar';
import Home from './Components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
