import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const RegistrationDialog = ({ open, onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Tạo đối tượng dữ liệu từ các state
        const userData = {
            email,
            password,
            name: fullName,
            phone,
            address,
            roleName: 'user' // Vai trò mặc định
        };

        try {
            // Gọi API đăng ký
            const response = await fetch('http://localhost:8080/api/users/register', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Xử lý thành công (ví dụ: thông báo người dùng)
                alert('Đăng ký thành công!');
                onClose(); // Đóng dialog sau khi đăng ký thành công
            } else {
                // Xử lý lỗi (ví dụ: thông báo người dùng)
                const errorData = await response.json();
                alert(`Đăng ký thất bại: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
            alert('Có lỗi xảy ra khi đăng ký.');
        }
    };

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Đăng ký tài khoản</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth variant="outlined" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField margin="dense" id="password" label="Mật khẩu" type="password" fullWidth variant="outlined" required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField margin="dense" id="fullName" label="Tên đầy đủ" type="text" fullWidth variant="outlined" required 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField margin="dense" id="phone" label="Số điện thoại" type="text" fullWidth variant="outlined" required 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            inputProps={{
                                maxLength: 10,
                            }}
                        />
                        <TextField margin="dense" id="address" label="Địa chỉ" type="text" fullWidth variant="outlined" required 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <DialogActions>
                            <Button onClick={onClose} color="primary">
                                Hủy
                            </Button>
                            <Button type="submit" color="primary">
                                Đăng ký
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default RegistrationDialog