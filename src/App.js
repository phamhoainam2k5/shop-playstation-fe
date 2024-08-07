import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/home_page/home';
import ListProducts from './components/list_products/ListProducts';
import Information from './components/infor_product/information';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all/may-game' element={<ListProducts/>} />
          <Route path='/all/dia-game' element={<ListProducts/>} />
          <Route path='/all/tay-cam' element={<ListProducts/>} />
          <Route path='/all/the-game' element={<ListProducts/>} />
          <Route path='/all/nitendo-switch' element={<ListProducts/>} />
          <Route path='/all/phu-kien' element={<ListProducts/>} />
          <Route path='/all/o-cung' element={<ListProducts/>} />
          <Route path='/infor' element={<Information />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
