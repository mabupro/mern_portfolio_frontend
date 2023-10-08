import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fetch-qiita-articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="App">
      {articles.map(article => (
        <div key={article.id}>
          <a href={article.url}>{article.title}</a>
        </div>
      ))}
    </div>
  );
}

export default App;
