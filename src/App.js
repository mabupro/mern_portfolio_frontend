import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import FetchQiitaMyArticles from './components/FetchQiitaMyArticles';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/fetch-qiita-articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <FetchQiitaMyArticles articles={articles} />
    </div>
  );
}

export default App;
