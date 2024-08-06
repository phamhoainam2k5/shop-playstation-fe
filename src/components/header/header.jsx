import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';

import logo from "../static/img/gamego-logo.jpg";
import PS4 from "../static/icons/icons8-playstation-50.png"
import Playstation from "../static/icons/icons8-playstation.svg"
import GameController from "../static/icons/icons8-game-controller-50.png"
import CardGame from "../static/icons/icons8-dexdrive-for-nintendo-64-50.png"
import SwitchNitendo from "../static/icons/icons8-nintendo-switch-logo-50.png"
import accessory from "../static/icons/icons8-apple-arcade-50.png"
import HardDriveSSD from "../static/icons/icons8-ssd-50.png"

export default function () {
  return (
    <div className='header'>
        <div className="logo">
          {/* <a href={'http://localhost:3000/'} title='Về trang chủ'>
            <img src={logo} alt='GameGo'/>
          </a> */}
          <Link to="/" title='Về trang chủ'>
            <img src={logo} alt='GameGo'/>
          </Link>
        </div>
        <div className='search'>
          <input 
            type="text" name="keywords" id="search-keyword" 
            className='search-keywords' 
            placeholder='Bạn tìm gì...'
          />
          <SearchIcon className='search-icon'/>
        </div>
        <div className='product-portfolio'>
          <nav>
            <Link to="/all/may-game" title="Máy ps4, switch, xbox" className='nav-item'>
              <img src={PS4} className='nav-img'/>
              <span className='nav-text'>Máy Game</span>
            </Link>
            <Link to="/all/dia-game" title="Đĩa game ps4,chép game ps4,game switch, game xbox, game PC" className='nav-item'>
              <img src={Playstation} className='nav-img'/>
              <span className='nav-text'>Game</span>
            </Link>
            <Link to="/all/tay-cam" title="Phụ kiện ps4. phụ kiện switch, phụ kiện xbox" className='nav-item'>
              <img src={GameController} className='nav-img'/>
              <span className='nav-text'>Tay Cầm</span>
            </Link>
            <Link to="/all/the-game" title="Phụ kiện ps4. phụ kiện switch, phụ kiện xbox" className='nav-item'>
              <img src={CardGame} className='nav-img'/>
              <span className='nav-text'>Thẻ Game</span>
            </Link>
            <Link to="/all/nitendo-switch" title="Phụ kiện ps4. phụ kiện switch, phụ kiện xbox" className='nav-item'>
              <img src={SwitchNitendo} className='nav-img'/>
              <span className='nav-text'>Switch</span>
            </Link>
            <Link to="/all/phu-kien" title="Phụ kiện ps4. phụ kiện switch, phụ kiện xbox" className='nav-item'>
              <img src={accessory} className='nav-img'/>
              <span className='nav-text'>Phụ Kiện</span>
            </Link>
            <Link to="/all/o-cung" title="Phụ kiện ps4. phụ kiện switch, phụ kiện xbox" className='nav-item'>
              <img src={HardDriveSSD} className='nav-img'/>
              <span className='nav-text'>Ổ Cứng</span>
            </Link>
          </nav>
        </div>
    </div>
  )
}
