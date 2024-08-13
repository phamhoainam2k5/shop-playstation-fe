import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../header/header'
import Footer from '../footer/footer'
import QuickSupport from '../quick_support/QuickSupport'
import "./information.css"

// import MayPS5 from "../static/img/may-ps5-gia-re-P1349-1621770999197.jpg"
import done from "../static/icons/icons8-done-64.png"

export default function InformationProduct() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const handleInputChange = (e) => {
    const value = Math.max(1, e.target.value);
    setQuantity(value);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${productId}`)
        .then(response => {setProduct(response.data);})
        .catch(error => {console.error('There was an error fetching the product!', error);});
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const marketPrice = product.price * 1.1; // Market price increased by 9%
  const savings = marketPrice - product.price;
  const savingsPercentage = ((savings / marketPrice) * 100).toFixed(0);

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
        {/* THÔNG TIN CHUNG CỦA SẢN PHẨM */}
        <div className='infor-product'>
          {/* TIÊU ĐỀ SẢN PHẨM */}
          <div className="title-product" id='title'>
            <h1>{product.productName}</h1>
            <span>Mã SP: {product.id}</span>
          </div>
          {/* THÔNG TIN CƠ BẢN SẢN PHẨM */}
          <div className='product-details' id='details'>
            {/* ẢNH SẢN PHẨM */}
            <div className='image-product'>
              <img src={`http://localhost:8080/img/${product.thumbnailImage}`} alt={product.productName} />
            </div>
            {/* THÔNG TIN CHUNG */}
            <div className='details'>
              {/* MÔ TẢ NGẮN GỌN SẢN PHẨM */}
              <div className='product-description'>
                <p className='content'>{product.generalDescription}</p>
              </div>
              {/* HÃNG VỚI ĐÁNH GIÁ */}
              <div className='brand-and-review'>
                <div className='brand'>
                  Thương hiệu: {product.brand}
                </div>
                <div className="rating">
                  <a href="#"><span>7 đánh giá</span></a>
                </div>
              </div>
              {/* GIÁ VỚI TRẠNG THÁI */}
              <div className='price-and-status'>
                <p className='price'>
                  <span>Giá niêm yết:</span>
                  <strong id='amount'>{product.price.toLocaleString('vi-VN')}₫</strong>
                </p>
                <p className='price'>
                  <span>Giá thị trường:</span>
                  <del>{marketPrice.toLocaleString('vi-VN')}₫</del>
                </p>
                <p className='price'>
                  <span>Tiết kiệm:</span>
                  {savings.toLocaleString('vi-VN')}₫
                  <em>-{savingsPercentage}%</em>
                </p>
                <p className='price'>
                  <span>Trạng thái:</span>
                  <label style={{ color: product.status === 'IN_STOCK' ? 'green' : 'red' }}>
                    {product.status === 'IN_STOCK' ? 'Còn hàng' : 'Tạm Hết Hàng'}
                  </label>
                </p>
              </div>
              {/* MỘT SỐ THÔNG TIN THÊM */}
              {product.moreInformation && (
                <div className='more-information'>
                  <div className="protit">Thông tin</div>
                  <div className="prob">
                    <p>{product.moreInformation}</p>
                  </div>
                </div>
              )}
              {product.status === 'IN_STOCK' && (
                <div className="btn">
                  <div className="number-product">
                    <span>Số lượng: <input type="number" name="number-products" id="number-prodts" value={quantity} min="1" max="10" onChange={handleInputChange}/></span>
                  </div>
                  <div className="btn-add-t0-c4rd">
                    <form>
                      <button type='submit'>THÊM VÀO GIỎ HÀNG</button>
                    </form>
                  </div>
                  <div className="btn-buy-n0w">
                    <button>MUA NGAY</button>
                  </div>
                </div>
              )}
            </div>
            {/* BẢNG ƯU ĐÃI KHÁCH HÀNG */}
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
        {/* MÔ TẢ SẢN PHẨM */}
        <div className="details-description">
          {/* MÔ TẢ CHI TIẾT SẢN PHẨM */}
          <div className="dd" id="dd">
            
          </div>
          {/* THÔNG SỐ KỸ THUẬT SẢN PHẨM */}
          <div className="specifications">

          </div>
        </div>
      </div>
      
      <Footer />
      <QuickSupport />
    </>
    
  )
}
