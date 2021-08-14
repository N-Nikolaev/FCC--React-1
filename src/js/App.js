import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Footer from './components/Footer'




const App = () => {
    const [theme, setTheme] = useState('');
    
    const randTheme = () => {
        const themes = [
            'pink',
            'yellow',
            'orange',
            'red',
            'blue',
            'green',
            'purple',
            'gray',
            'black',
        ];
        const theme = themes[ Math.floor(Math.random() * themes.length) ];
        return theme;
    }

    const handleTheme = () => setTheme(randTheme());

    useEffect(() => {
        handleTheme();
    },[]);

    return (
        <div className='app' data-theme={theme}>
            <div>
                <Card theme={handleTheme} />
                <Footer />
            </div>
        </div>
    )
}

export default App