import React, { useEffect } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/product':
                setValue(1);
                break;
            case '/qiita':
                setValue(2);
                break;
            case '/concept':
                setValue(3);
                break;
            default:
                break;
        }
    }, [location]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/product');
                break;
            case 2:
                navigate('/qiita');
                break;
            case 3:
                navigate('/concept');
                break;
            default:
                break;
        }
    };

    return (
        <AppBar position="fixed" color="default" sx={{ mt: 7 }}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="About" sx={{ textTransform: 'none' }} />
                <Tab label="Product" sx={{ textTransform: 'none' }} />
                <Tab label="Qiita" sx={{ textTransform: 'none' }} />
                <Tab label="Concept" sx={{ textTransform: 'none' }} />
            </Tabs>
        </AppBar>
    );
};
