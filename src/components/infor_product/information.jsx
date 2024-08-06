import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "./information.css"

import MayPS5 from "../static/img/may-ps5-gia-re-P1349-1621770999197.jpg"
import done from "../static/icons/icons8-done-64.png"

export default function information() {
  return (
    <>
      <Header />
      <div className='infor-container'>
        <div className='breadcrumbs'>
          <ul className='items'>
            <li className='item-after'>
              <a href="#">
                <span>Trang chủ</span>
              </a>
            </li>
            <li className='item-last-child'>
              <a href="#">
                <span>Thể loại</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='infor-product'>
          <div className="title-product" id='title'>
            <h1>Máy Nintendo Switch Oled Mới - White set</h1>
            <span>Mã SP: 4902370548532</span>
          </div>
          <div className='product-details' id='details'>
            <div className='image-product'>
              <img src={MayPS5} alt="" />
            </div>
            <div className='details'>
              <div className='product-description'>
                <p className='content'>
                  Máy PS5 có khả năng chơi game cực kỳ đỉnh, trải nghiệm tải nhanh như chớp 
                  với tốc độ cực cao của ổ cứng SSD, đắm chìm sâu hơn với hỗ trợ phản hồi xúc 
                  giác, Âm thanh 3D và thế hệ trò chơi PlayStation hoàn toàn mới.
                </p>
              </div>
              <div className='brand-and-review'>
                <div className='brand'>
                  Thương hiệu: Sony
                </div>
                <div className="rating">
                  <a href="#"><span>7 đánh giá</span></a>
                </div>
              </div>
              <div className='price-and-status'>
                <p className='price'>
                  <span>Giá niêm yết:</span>
                  <strong id='amount'>12.800.000₫</strong>
                </p>
                <p className='price'>
                  <span>Giá thị trường:</span>
                  <del>14.080.000₫</del>
                </p>
                <p className='price'>
                  <span>Tiết kiệm:</span>
                  1.280.000₫
                  <em>-9%</em>
                </p>
                <p className='price'>
                  <span>Trạng thái:</span>
                  <label>Tạm Hết Hàng</label>
                </p>
              </div>
              <div className='more-information'>
                <div class="protit">Thông tin</div>
                <div class="prob">
                  <p>
                    Phiên bản chính hãng của Sony Việt Nam
                  </p>
                </div>
              </div>
            </div>
            <div className='incentives'>
              <ul className='policy'>
                <li className='wrpr'>
                  <img src={done} />
                  Bảo hành: <strong>12 tháng</strong>.
                </li>
                <li>
                  <img src={done} />
                  Đổi mới trong 7 ngày nếu có lỗi do nhà sản xuất.
                </li>
                <li>
                  <img src={done} />
                  <p>Địa chỉ: KM20 QL32, Lai Xá, Hoài Đức, Hà Nội. <br/>
                  <small>Hotline: 0336172381 | 0707.199.997 (09:00 - 20:00)</small></p>
                </li>
                <li className="inpr">
                  <img src={done} />
                  <p>Giao hàng nhanh trong 30 phút tại Thủ đô Hà Nội.</p>
                </li>
                <li className="wrpr">
                  <img src={done} />
                  Hoàn tiền <strong>200%</strong> nếu phát hiện hàng giả.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="more-in4">
          
        </div>
      </div>
      <Footer />
    </>
    
  )
}
