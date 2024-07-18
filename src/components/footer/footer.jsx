import React from 'react'
import "./footer.css"

export default function footer() {
return (
    <div className='footer'>
        <div class="footer-container">
            <div class="footer-left">
                <ul>
                    <li><a href="#">Hướng dẫn mua hàng Online</a></li>
                    <li><a href="#">Chính sách bảo hành</a></li>
                    <li><a href="#">Chính sách đổi trả</a></li>
                    <li><a href="#">Giao hàng & Thanh toán</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                </ul>
            </div>
            <div class="footer-right">
                <ul>
                    <li><a href="#">Giới thiệu công ty</a></li>
                    <li><a href="#">Tuyển dụng</a></li>
                    <li><a href="#">Gửi góp ý, khiếu nại</a></li>
                    <li><a href="#">Xem bản Mobile</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <p>Số điện thoại mua hàng online: 0336172381 | 0707.199.997</p>
                <p>Địa chỉ cửa hàng: KM20 QL32, Lai Xá, Hoài Đức, Hà Nội</p>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 GameGo.com.vn. All Rights Reserved.</p>
        </div>
    </div>
)
}
