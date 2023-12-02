import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
export const IndexPage = () => {
    return (
        <Box sx={{ pt: 12 }}>
            <Container maxWidth="xl" sx={{ backgroundColor: '#f5f5f5', padding: 3, height: '100vh' }}>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTLlFkGYAqVoCpV7nLphoiIqLLS1iuo0bPKymWXLbEXxmQjAp__4bdDnAnBODVnyw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="540" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </Box>
            </Container>
        </Box>
    );
}