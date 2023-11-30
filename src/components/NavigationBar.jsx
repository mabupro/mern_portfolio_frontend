import React, { useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
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
            case '/qiita':
                setValue(1);
                break;
            default:
                setValue(0);
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
                navigate('/qiita');
                break;
            default:
                break;
        }
    };

    return (
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Home" sx={{ textTransform: 'none' }} />
            <Tab label="Qiita" sx={{ textTransform: 'none' }} />
        </Tabs>
    );
};
