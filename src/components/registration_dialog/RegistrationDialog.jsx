import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const RegistrationDialog = ({ open, onClose, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý đăng ký tài khoản ở đây
        console.log('Đăng ký tài khoản');
        onSubmit();
    };

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Đăng ký tài khoản</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth variant="outlined" required/>
                        <TextField margin="dense" id="password" label="Mật khẩu" type="password" fullWidth variant="outlined" required />
                        <TextField margin="dense" id="fullName" label="Tên đầy đủ" type="text" fullWidth variant="outlined" required />
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