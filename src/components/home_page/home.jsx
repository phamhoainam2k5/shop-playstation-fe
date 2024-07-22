import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./home.css"

import Banner from "../static/img/Header-Banner-PlayStation.png"
import MayPS5 from "../static/img/may-ps5-gia-re-P1349-1621770999197.jpg"

export default function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [gameConsoleProducts, setGameConsoleProducts] = useState([]);
    const [gameDiscProducts, setGameDiscProducts] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8080/api/products/top-selling')
        .then(response => setFeaturedProducts(response.data))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/products/top-selling/category/1')
        .then(response => setGameConsoleProducts(response.data))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/products/top-selling/category/2')
        .then(response => setGameDiscProducts(response.data))
        .catch(error => console.error(error));
    }, []);

      // Hàm định dạng số
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const renderProductItem = (product) => (
        <div className="product-item" key={product.id}>
            <img src={`http://localhost:8080/img/${product.thumbnailImage}`} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p className="price">{formatNumber(product.price)}đ</p>
            <p className="sold">• Sản phẩm đã bán: {product.numberOfProductsSold}</p>
        </div>
    );

return (
    <div className='home-container'>
        <div className='row'>
            <div className='banner'>
                <img src={Banner} alt="banner" />
            </div>
            <div className='featured-products'>
                <div className='title'>
                    <h2>Sản phẩm nổi bật</h2>
                </div>
                <div class="product-grid">
                    {featuredProducts.map(renderProductItem)}
                </div>
            </div>
            <div className="game-console">
                <div className='title'>
                    <h2>Máy Game</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    {gameConsoleProducts.map(renderProductItem)}
                </div>
            </div>
            <div className="game-disc">
                <div className='title'>
                    <h2>Đĩa Game</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    {gameDiscProducts.map(renderProductItem)}
                </div>
            </div>
            <div className="game-card">
                <div className='title'>
                    <h2>Thẻ Game</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <a href="#">
                            <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                            <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                            <p class="price">12.800.000đ</p>
                            <p class="sold">• Sản phẩm đã bán: 1.243</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="switch">
                <div className='title'>
                    <h2>Switch Nitendo</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <a href="#">
                            <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                            <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                            <p class="price">12.800.000đ</p>
                            <p class="sold">• Sản phẩm đã bán: 1.243</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="accessory">
                <div className='title'>
                    <h2>Phụ Kiện</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <a href="#">
                            <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                            <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                            <p class="price">12.800.000đ</p>
                            <p class="sold">• Sản phẩm đã bán: 1.243</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hard-drive">
                <div className='title'>
                    <h2>Ổ Cứng</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                        <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                        <p class="price">12.800.000đ</p>
                        <p class="sold">• Sản phẩm đã bán: 1.243</p>
                    </div>
                    <div class="product-item">
                        <a href="#">
                            <img src={MayPS5} alt="Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam" />
                            <h3>Máy PS5 Standard Edition - Chính Hãng Sony Việt Nam</h3>
                            <p class="price">12.800.000đ</p>
                            <p class="sold">• Sản phẩm đã bán: 1.243</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}