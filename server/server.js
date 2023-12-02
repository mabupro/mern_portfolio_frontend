require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const port = 5000;

// キャッシュ関連の設定
let cacheData = null;
let cacheTime = null;
const cacheDuration = 60 * 60 * 1000;

app.get('/fetch-qiita-articles', async (req, res) => {
    const currentTime = new Date().getTime();
    // キャッシュが有効かどうかをチェック
    if (cacheData && cacheTime && currentTime - cacheTime < cacheDuration) {
        return res.send(cacheData); // キャッシュからデータを送信
    }

    try {
        const response = await axios.get('https://qiita.com/api/v2/users/mabupro/items', {
            headers: {
                Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`
            }
        });

        const processedData = response.data.map(article => ({
            title: article.title,
            url: article.url,
            id: article.id,
            tags: article.tags,
        }));

        // キャッシュの更新
        cacheData = processedData;
        cacheTime = currentTime;

        res.send(processedData);
    } catch (error) {
        console.error('Error fetching data from Qiita API:', error.response?.data || error.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.listen(5000, () => console.log(`Server is running on port ${port}`));
