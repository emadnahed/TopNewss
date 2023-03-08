import React from "react"
import Card from "./Components/Card"
import './App.css';
import Header from "./Components/Header";






export default function App() {
    const [NewsData, setNewsData] = React.useState([])
    const [darkMode, setDarkMode] = React.useState(true)
    

    
        
    // side effects
    React.useEffect(function() {
        fetch("https://inshorts.deta.dev/news?category=all")
            .then(res => res.json())
            .then(data => setNewsData(data.data))
    }, [])
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    let cls = darkMode ? "dark": "white"
    let comb = "all" + " " + cls
    

    const CardElements = NewsData.map(news => {return <Card  
                                                className="card"
                                                key={news.id} 
                                                colse={cls}
                                                Author={news.author} 
                                                NewsTitle={news.title} 
                                                NewsContent={news.content} 
                                                RMore={news.readMoreUrl} 
                                                url={news.url}
                                                NewsDate={news.date.slice(0,11)} 
                                                NewsImage={news.imageUrl}
                                                NewsTime={news.time}
                                                />}
                                                )
    
    
    
    return (
        <div className={comb}>
            <Header 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
                colse={cls}
            />

            <main>
            {CardElements}
            </main>

            
                              
        </div>
    )
}
