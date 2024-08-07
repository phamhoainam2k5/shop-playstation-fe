import React, { useState } from 'react'
import { Box, Popper, Paper, Typography, Link } from '@mui/material';
import RegistrationDialog from '../registration_dialog/RegistrationDialog';
import LoginDialog from "../login_dialog/LoginDialog"
import "./QuickSupport.css"

import USERicon from "../static/icons/icons8-user-50.png"
import SHOPPINGcart from "../static/icons/icons8-shopping-cart-60.png"

export default function QuickSupport() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
    const [openLoginDialog, setOpenLoginDialog] = useState(false);

    const handleUserMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleUserMouseLeave = () => {
        setAnchorEl(null);
    };

    const handleRegisterClick = () => {
        setOpenRegisterDialog(true);
    };
    
    const handleRegisterClose = () => {
        setOpenRegisterDialog(false);
    };

    const handleClickOpenLogin = () => {
        setOpenLoginDialog(true);
    };
    
    const handleCloseLogin = () => {
        setOpenLoginDialog(false);
    };

    const handleRegisterSubmit = () => {
        // Xử lý đăng ký tài khoản ở đây
        console.log('Đăng ký tài khoản');
        handleRegisterClose();
    };

    const openUser = Boolean(anchorEl);
    const userId = openUser ? 'user-popover' : undefined;

return (
    <Box sx={{ position: 'fixed', right: 5, bottom: 500, zIndex: 1000, textAlign: 'center' }}>
        {/* User Account Section */}
        <Box onMouseEnter={handleUserMouseEnter} onMouseLeave={handleUserMouseLeave}
            sx={{ display: 'block', background: '#000', width: 50, height: 50, borderRadius: '50%', textAlign: 'center', lineHeight: '40px', color: '#fff', position: 'relative' }}
        >
            {/* <IconButton> */}
            <img src={USERicon} alt="Tài khoản" className='icon-account'/>
            {/* </IconButton> */}
            <Popper id={userId} open={openUser} anchorEl={anchorEl} placement="left-start" disablePortal>
                <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', width: 150, marginRight: 2 }}>
                    <Typography variant="body1">
                        <Link href="#" underline="hover" onClick={handleRegisterClick}>
                            Đăng ký
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" underline="hover" onClick={handleClickOpenLogin}>
                            Đăng nhập
                        </Link>
                    </Typography>
                </Paper>
            </Popper>
        </Box>

        {/* Shopping Cart Section */}
        <Box sx={{ marginTop: 1 }}>
            <Link href="gio-hang" sx={{ display: 'block', background: '#000', width: 50, height: 50, borderRadius: '50%', textAlign: 'center', lineHeight: '40px', color: '#fff', position: 'relative' }}>
                <img src={SHOPPINGcart} alt="Giỏ hàng" className='icon-shopping-cart'/>
                <Box component="em" sx={{ position: 'absolute', top: -5, right: 0, background: '#fed700', width: 20, height: 20, borderRadius: '50%', color: '#333', lineHeight: '20px' }}>0</Box>
            </Link>
        </Box>

        {/* Registration Dialog */}
        <RegistrationDialog open={openRegisterDialog} onClose={handleRegisterClose} onSubmit={handleRegisterSubmit}/>

        {/* Login Dialog */}
        <LoginDialog open={openLoginDialog} onClose={handleCloseLogin} />
    </Box>
)
}
