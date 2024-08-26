import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton, Divider, TextField, Link } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from '../header/header';
import "./ShoppingCart.css"

import MayPS5 from "../static/img/may-ps5-gia-re-P1349-1621770999197.jpg"
import axios from 'axios';

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const userId = JSON.parse(sessionStorage.getItem('user')) || JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:8080/api/cart/${userId}/items`)
            .then((response) => {
                const data = Array.isArray(response.data) ? response.data : [];
                setCartItems(data);
            })
            .catch(error => {console.error("There was an error fetching the cart items!", error);});
        }
    }, [userId]);

    useEffect(() => {
        let newTotal = 0;
        cartItems.forEach(item => {
            newTotal += item.productPrice * item.quantity;
        });
        setTotal(newTotal);
    }, [cartItems]);

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        const newQuantity = Math.max(1, Math.min(10, quantity));
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

return (
    <>
        {/* header */}
        <Header />
        {/* Chi tiet gio hang */}
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
            <Box sx={{ width: '61%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    
                    <Link href="/" underline="none" sx={{ display: 'flex', fontSize: 16, alignItems: 'center'}}>
                        <ArrowBackIcon sx={{ marginRight: 1 }} />
                        <Typography variant='h6'>Mua thêm sản phẩm khác</Typography>
                    </Link>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>Giỏ hàng của bạn</Typography>
                </Box>
                <Divider />
                {cartItems.length === 0 ? (
                    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                        <Typography variant="h6">Giỏ hàng của bạn hiện tại đang trống <br /> 
                        Bạn hãy đi mua sắm chọn những sản phẩm mình thích và thêm vào giỏ hàng để nhận nhiều ưu đãi hơn nhé !!!</Typography>
                    </Box>
                ) : (
                    cartItems.map((item) => (
                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginTop: 2, padding: 2, borderBottom: '1px solid #ccc' }}>
                        {/* ảnh sản phẩm */}
                        <img src={`http://localhost:8080/img/${item.productImage}`} alt={item.productName} width={100} height={100} style={{ marginRight: '20px' }} />
                        <Box sx={{ flex: 1 }}>
                            {/* tên sản phẩm */}
                            <Typography variant="h6">{item.productName}</Typography>
                        </Box>
                        {/* giá sản phẩm */}
                        <Typography variant="h6" sx={{ marginRight: '20px', color: 'black' }}>{item.productPrice.toLocaleString()} đ</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                            <IconButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                <RemoveIcon />
                            </IconButton>
                            {/* số lượng sản phẩm đặt trước */}
                            <TextField
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                sx={{ width: 70, textAlign: 'center', '& input[type="number"]::-webkit-inner-spin-button': {'-webkit-appearance': 'none', margin: 0}, '& input[type="number"]::-webkit-outer-spin-button': {'-webkit-appearance': 'none', margin: 0}, '& input[type="number"]': {'-moz-appearance': 'textfield'}}}
                                disabled
                            />
                            <IconButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton color="secondary" onClick={() => handleRemoveItem(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))
                )}
                {cartItems.length > 0 && (
                <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between', marginBottom: 5}}>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>Tổng cộng: {total.toLocaleString()} đ</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Đặt hàng ngay</Button>
                </Box>
                )}
            </Box>
        </Box>
        {/* end chi tiet gio hang */}
    </>
)
}