import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home_page/home';
import List from './components/list_products/list';
import Information from './components/infor_product/information';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/infor' element={<Information />} />
        </Routes>
      </Router>
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
