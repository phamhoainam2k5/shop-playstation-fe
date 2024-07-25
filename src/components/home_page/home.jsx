import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./home.css"

import Banner from "../static/img/Header-Banner-PlayStation.png"
import MayPS5 from "../static/img/may-ps5-gia-re-P1349-1621770999197.jpg"

export default function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [gameConsoleProducts, setGameConsoleProducts] = useState([]);
    const [gameDiscProducts, setGameDiscProducts] = useState([]);
    const [gameControllerProducts, setGameControllerProducts] = useState([]);
    const [cardGameProducts, setCardGameProducts] = useState([]);
    const [nitendoSwitchProducts, setNitendoSwitchProducts] = useState([]);
    const [accessoryProducts, setAccessoryProducts] = useState([]);
    const [hardDriveProducts, setHardDriveProducts] = useState([]);

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

        axios.get('http://localhost:8080/api/products/top-selling/category/3')
        .then(response => setGameControllerProducts(response.data))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/products/top-selling/category/4')
        .then(response => setCardGameProducts(response.data))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/products/top-selling/category/5')
        .then(response => setNitendoSwitchProducts(response.data))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/products/top-selling/category/6')
        .then(response => setAccessoryProducts(response.data))
        .catch(error => console.error(error));

        axios.get('http://localhost:8080/api/products/top-selling/category/7')
        .then(response => setHardDriveProducts(response.data))
        .catch(error => console.error(error));
    }, []);

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

    const renderProductItem = (product) => (
        <div className="product-item" key={product.id}>
            <img src={`http://localhost:8080/img/${product.thumbnailImage}`} alt={product.productName} />
            <h3>{truncateText(product.productName, 52)}</h3>
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
                    <h2>Tay Cầm</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    {gameControllerProducts.map(renderProductItem)}
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
                    {cardGameProducts.map(renderProductItem)}
                </div>
            </div>
            <div className="switch">
                <div className='title'>
                    <h2>Switch Nitendo</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    {nitendoSwitchProducts.map(renderProductItem)}
                </div>
            </div>
            <div className="accessory">
                <div className='title'>
                    <h2>Phụ Kiện</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    {accessoryProducts.map(renderProductItem)}
                </div>
            </div>
            <div className="hard-drive">
                <div className='title'>
                    <h2>Ổ Cứng</h2>
                    <span className='see-all'><a href="">Xem tất cả</a></span>
                </div>
                <div class="product-grid">
                    {hardDriveProducts.map(renderProductItem)}
                </div>
            </div>
        </div>
    </div>
)
}