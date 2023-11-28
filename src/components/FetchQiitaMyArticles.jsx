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
        <Container maxWidth="sm">
            <Grid container spacing={3}>
                {articles.map(article => (
                    <Grid item xs={12} key={article.id}>
                        <Card sx={{ maxWidth: 600 }} >
                            <CardActionArea
                                href={article.url}
                                target="_blank"
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <CardContent sx={{ paddingBottom: 0 }}> 
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            color: 'darkslateblue',
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
