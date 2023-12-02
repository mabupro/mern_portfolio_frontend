import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const FetchQiitaMyArticles = ({ articles }) => {
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: '#f5f5f5', padding: 3 }}>
            <Grid container spacing={2} justifyContent="center">
                {articles.map((article, index) => (
                    <Grid item xs={12} md={9} key={article.id}>
                        <Card
                            sx={{
                                maxWidth: 600,
                                margin: 'auto',
                                backgroundColor: '#ffffff',
                                boxShadow: 3,
                                opacity: 0,
                                animation: `fadeIn 1s ease-out ${index * 0.1}s forwards`,
                                '@keyframes fadeIn': {
                                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                                    '100%': { opacity: 1, transform: 'translateY(0)' }
                                }
                            }}
                        >
                            <CardActionArea
                                href={article.url}
                                target="_blank"
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <CardContent sx={{ paddingBottom: 0 }}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            color: '#483d8b',
                                            fontWeight: 'bold',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: 'vertical',
                                            marginBottom: 1,
                                        }}
                                    >
                                        {article.title}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ p: 1 }}>
                                    {article.tags.map((tag) => (
                                        <Chip
                                            label={tag.name}
                                            key={tag.name}
                                            sx={{
                                                marginRight: 1,
                                                marginBottom: 1,
                                                textTransform: 'capitalize',
                                                backgroundColor: '#e0f2f1',
                                                color: '#004d40'
                                            }}
                                        />
                                    ))}
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default FetchQiitaMyArticles;
