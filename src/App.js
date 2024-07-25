import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home_page/home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
