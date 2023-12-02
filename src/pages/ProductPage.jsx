import React, { useState, useEffect } from 'react';
import { Grid, Container, Box, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const ProductPage = () => {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    const goToDetailPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    useEffect(() => {
        // Trigger the fade-in effect after the component is mounted
        setFadeIn(true);
    }, []);

    return (
        <Box sx={{ pt: 14 }}>
            <Container maxWidth="xl" sx={{ backgroundColor: '#f5f5f5', padding: 1, pt: 3 }}>
                {/* Paperのサイズを調整 */}
                <Paper elevation={3} sx={{
                    padding: 2,
                    backgroundColor: '#fff',
                    borderRadius: 3,
                    maxWidth: '900px',
                    margin: 'auto',
                    opacity: 0,
                    transition: 'opacity 1s ease-in-out',
                    ...(fadeIn && { opacity: 1 })
                }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {/* テキストとボタンのセクション */}
                        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                            <Typography variant="h5" fontStyle="bold" gutterBottom>
                                TravelChain
                            </Typography>
                            <Typography variant="body1" fontSize={14} gutterBottom>
                                ニッチな旅行ルートの共有・販売できる観光に新しい体験を提供するアプリ<br />名古屋Web3ハッカソンで制作
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => goToDetailPage(1)}>
                                詳細を見る
                            </Button>
                        </Grid>
                        {/* 画像のセクション */}
                        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                            <img
                                src="/product-images/Form_1.PNG"
                                alt="TravelChain"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '400px',
                                    width: 'auto',
                                    height: 'auto',
                                    border: '5px solid #fff',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Container maxWidth="xl" sx={{ backgroundColor: '#f5f5f5', padding: 1 }}>
                {/* Paperのサイズを調整 */}
                <Paper elevation={3} sx={{
                    padding: 2,
                    backgroundColor: '#fff',
                    borderRadius: 3,
                    maxWidth: '900px',
                    margin: 'auto',
                    opacity: 0,
                    transition: 'opacity 1s ease-in-out',
                    ...(fadeIn && { opacity: 1 })
                }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {/* テキストとボタンのセクション */}
                        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                            <Typography variant="h5" fontStyle="bold" gutterBottom>
                                TravelChain
                            </Typography>
                            <Typography variant="body1" fontSize={14} gutterBottom>
                                ニッチな旅行ルートの共有・販売できる観光に新しい体験を提供するアプリ<br />名古屋Web3ハッカソンで制作
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => goToDetailPage(1)}>
                                詳細を見る
                            </Button>
                        </Grid>
                        {/* 画像のセクション */}
                        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                            <img
                                src="/product-images/Form_1.PNG"
                                alt="TravelChain"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '400px',
                                    width: 'auto',
                                    height: 'auto',
                                    border: '5px solid #fff',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Container maxWidth="xl" sx={{ backgroundColor: '#f5f5f5', padding: 1 }}>
                {/* Paperのサイズを調整 */}
                <Paper elevation={3} sx={{
                    padding: 2,
                    backgroundColor: '#fff',
                    borderRadius: 3,
                    maxWidth: '900px',
                    margin: 'auto',
                    opacity: 0,
                    transition: 'opacity 1s ease-in-out',
                    ...(fadeIn && { opacity: 1 })
                }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {/* テキストとボタンのセクション */}
                        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                            <Typography variant="h5" fontStyle="bold" gutterBottom>
                                TravelChain
                            </Typography>
                            <Typography variant="body1" fontSize={14} gutterBottom>
                                ニッチな旅行ルートの共有・販売できる観光に新しい体験を提供するアプリ<br />名古屋Web3ハッカソンで制作
                            </Typography>
                            <Button variant="outlined" color="primary" onClick={() => goToDetailPage(1)}>
                                詳細を見る
                            </Button>
                        </Grid>
                        {/* 画像のセクション */}
                        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                            <img
                                src="/product-images/Form_1.PNG"
                                alt="TravelChain"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '400px',
                                    width: 'auto',
                                    height: 'auto',
                                    border: '5px solid #fff',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};
