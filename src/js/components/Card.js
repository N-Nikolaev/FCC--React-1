import React, { useState, useEffect } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return { data, loading };
}

const Card = () => {
    const url = 'https://api.quotable.io/random';
    const { data, loading } = useFetch(url);
    
    console.log( data );

    return (
        <main className="card" id="quote-box">
            { loading && <div>Loading</div> }
            { 
                data && 
                <blockquote>
                    <p>{data.content}</p>
                    <cite>{data.author}</cite>
                </blockquote> 
            }
        </main>
    )
}

export default Card
