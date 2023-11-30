import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FetchQiitaMyArticles from '../components/FetchQiitaMyArticles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ShowQiitaPage = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/fetch-qiita-articles')
            .then(response => {
                setArticles(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <FetchQiitaMyArticles articles={articles} />
    );
};
