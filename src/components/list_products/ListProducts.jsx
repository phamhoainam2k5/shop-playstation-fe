import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/header';
import Footer from '../footer/footer';
import "./ListProducts.css"

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const currentPath = location.pathname; // Đường dẫn hiện tại
  let textCategory;
  let categoryId;
  
  console.log("Current Path:", currentPath);

  if (currentPath === "/all/may-game") {
    categoryId = 1;
    textCategory = "Máy game";
  } else if (currentPath === "/all/dia-game") {
    categoryId = 2;
    textCategory = "Đĩa Game";
  } else if (currentPath === "/all/tay-cam") {
    categoryId = 3;
    textCategory = "Tay cầm";
  } else if (currentPath === "/all/the-game") {
    categoryId = 4;
    textCategory = "Thẻ Game";
  } else if (currentPath === "/all/nitendo-switch") {
    categoryId = 5;
    textCategory = "Switch Nitendo";
  } else if (currentPath === "/all/phu-kien") {
    categoryId = 6;
    textCategory = "Phụ kiện";
  } else if (currentPath === "/all/o-cung") {
    categoryId = 7;
    textCategory = "Ổ cứng";
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/category/${categoryId}`)
    .then(response => setProducts(response.data))
    .catch(error => console.error(error));
  }, [categoryId]);

  const renderProductItem = (product) => (
      <div className="product-item" key={product.id}>
          <img src={`http://localhost:8080/img/${product.thumbnailImage}`} alt={product.productName} />
          <h3>{truncateText(product.productName, 52)}</h3>
          <p className="price">{formatNumber(product.price)}đ</p>
          <p className="sold">• Sản phẩm đã bán: {product.numberOfProductsSold}</p>
      </div>
  );

  // Hàm định dạng số
  const formatNumber = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) return text;

      let truncated = text.substr(0, maxLength);
      const lastSpaceIndex = truncated.lastIndexOf(' ');

      if (lastSpaceIndex > 0) {
          truncated = truncated.substr(0, lastSpaceIndex);
      }

      return truncated + '...';
  };

  return (
    <>
        <Header />
        <div className='list-container'>
            <div className='breadcrumbs'>
              <ul className='items'>
                <li className='item-after'>
                  <a href="#">
                    <span>Trang chủ</span>
                  </a>
                </li>
                <li className='item-last-child'>
                  <a href="#">
                    <span>{textCategory}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='class-card'>
              {/* theo ten san pham */}
              <div className='name-product'>
              </div>
              {/* theo thuong hieu */}
              <div className='product-brand'>
              </div>
              {/* filter */}
              <div className='filter'>
              </div>
            </div>
            <div className='list-products'>
                <div className='product-grid'>
                    {products.map(renderProductItem)}
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}