// src/components/Newsboard.jsx
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsboard = ({ category = 'general' }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch(err => console.error("Failed to fetch news:", err));
    }, [category]);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row">
                {articles.map((news) => (
                    <div className="col-md-6 col-lg-3 d-flex" key={news.url}>
                        <NewsItem
                            title={news.title || "No title"}
                            description={news.description || "No description"}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Newsboard;
