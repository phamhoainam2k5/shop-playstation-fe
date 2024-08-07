import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';

const LoginDialog = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember me:", rememberMe);
        // Close dialog after login (optional)
        onClose();
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