import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Newscard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //  async function to fetch  news data
    const fetchNews = async () => {
      const apiKey = 'pub_5077077997fd1d9e9c72d4d34f8e31560821f';
      const url = 'https://newsdata.io/api/1/latest?apikey=pub_5077077997fd1d9e9c72d4d34f8e31560821f';
      const params = {
        category: 'entertainment',  
        language: 'en',             
        apiKey: apiKey             
      };

      try {
        const response = await axios.get(url, { params });
        setNews(response.data.results);
        console.log(news)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching news: {error.message}</p>;

  return (
    <div>
      
      <br />
      <h1 className='font-bold text-2xl underline'>Entertainment News</h1>
       <div className='grid grid-cols-5 gap-5 p-2'>
        {news.map((article ) => (
          <div key={article.article_id} className='flex flex-col p-3'>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              
              <img src={article.image_url} alt={article.title} className='w-[400px]' />
              <h2>{article.title}</h2>
              <p>{article.pubDate}</p>
              
            </a>
          </div>
        ))}
         </div>
      <br />
      
    </div>
  );
};

export default Newscard;
