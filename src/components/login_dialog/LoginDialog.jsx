import React, { useState } from 'react'
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';

const LoginDialog = ({ open, onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', null, {
                params: {
                    email,
                    password,
                },
            });

            if (response.status === 200) {
                const userData = response.data.id;

                sessionStorage.setItem('user', JSON.stringify(userData));
                console.log(sessionStorage.getItem('user'));

                if (rememberMe) {
                    localStorage.setItem('user', JSON.stringify(userData));
                }

                onLoginSuccess();

                onClose();
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        }
    };

return (
    <>
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Đăng nhập</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField margin="dense" id="password" label="Mật khẩu" type="password" fullWidth variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    }
                    label="Nhớ mật khẩu"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={handleLogin}>Đăng nhập</Button>
            </DialogActions>
        </Dialog>
    </>
)
}

export default LoginDialog