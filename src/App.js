import React from "react"
import Card from "./Components/Card"
import './App.css';
import Header from "./Components/Header";




export default function App() {
    const [NewsData, setNewsData] = React.useState([])
    const [darkMode, setDarkMode] = React.useState(true)
    const [formData, setFormData] = React.useState(
        {

            favColor: "all"
        }
    )
    
    function handleChange(event) {   
        const {value} = event.target
        setFormData(prevFormData => {
            return {
                favColor: value
            }
        })
    }
        
    // side effects
    React.useEffect(function() {
        fetch(`https://inshorts.deta.dev/news?category=${formData.favColor}`)
            .then(res => res.json())
            .then(data => setNewsData(data.data))
    }, [formData.favColor])
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    let cls = darkMode ? "dark": "white"
    let comb = `"all" ${cls}`
    
    
    

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
                handleChange={handleChange}
                x = {formData.favColor}
            />

            <main>
            {CardElements}
            </main>                              
        </div>
    )
}
