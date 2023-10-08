const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/fetch-qiita-articles', async (req, res) => {
    const response = await axios.get('https://qiita.com/api/v2/users/mabupro/items');
    res.send(response.data.map(article => ({
        title: article.title,
        url: article.url,
        id: article.id
    })));
});

app.listen(5000, () => console.log('Server is running on port 5000'));
