import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


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
            { 
                loading && 
                <div className="card__content">
                    <span>Loading</span> 
                </div>
            }
            { 
                data && 
                <blockquote className="card__content">
                    <h1 
                        className="card__text" 
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
            <div className="card__buttons">
                <a 
                    id="tweet-quote"
                    href="twitter.com/intent/tweet" 
                    target="_blank">
                    <FontAwesomeIcon 
                        icon={faTwitterSquare}
                        size="3x" />
                </a>
                <button
                    className="btn"
                    id="new-quote"
                    onClick={fetchData}>
                    New Quote
                </button>
            </div>
        </main>
    )
}

export default Card
