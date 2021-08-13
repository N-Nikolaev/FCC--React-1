import React, { useState, useEffect, useCallback } from 'react';


const Card = () => {
    const url = 'https://api.quotable.io/random';
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <main className="card" id="quote-box">
            { loading && <span>Loading</span> }
            { 
                data && 
                <blockquote>
                    <h1 
                        className="card__content" 
                        id="text">
                        {data.content}
                    </h1>
                    <cite 
                        className="card__author" 
                        id="author">
                        - {data.author}
                    </cite>
                </blockquote> 
            }
            <a 
                id="tweet-quote"
                href="twitter.com/intent/tweet" 
                target="_blank">
                <i>i</i>
            </a>
            <button
                className="btn"
                id="new-quote"
                onClick={fetchData}>
                New Quote
            </button>
        </main>
    )
}

export default Card
