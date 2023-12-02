import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

const colors = [
    { code: '#f5f5f5', name: 'Container Background' },
    { code: '#ffffff', name: 'Card Background' },
    { code: '#483d8b', name: 'Title Text' },
    { code: '#e0f2f1', name: 'Tag Background' },
    { code: '#004d40', name: 'Tag Text' },
    // 必要に応じて他のカラーを追加
];


const ColorSample = ({ color }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Paper sx={{ width: 50, height: 50, backgroundColor: color.code, marginRight: 2, boxShadow: 5 }} />
            <Typography>{color.name} - {color.code}</Typography>
        </Box>
    );
};

export const ConceptPage = () => {
    return (
        <Box sx={{ pt: 12 }}>
            <Container maxWidth="xl" sx={{ backgroundColor: '#f5f5f5', padding: 3 }}>
                <Box sx={{ padding: 3 }}>
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>Our Concept and Colors</Typography>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>Colors</Typography>
                    {colors.map(color => <ColorSample key={color.code} color={color} />)}
                    <Typography variant="h6" sx={{ marginTop: 4 }}>Concept</Typography>
                    <Typography>
                        Here you can write about your site's concept, design philosophy, and so on.
                        {/* コンセプトの説明テキスト */}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

