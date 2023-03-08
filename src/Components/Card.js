


import React from 'react'



export default function Card(props) {    
    
    const trick = "Card" + " " + props.colse
    console.log(trick)
    return(
        
        <main className="card-whole">
                <div className = {trick}>
                    <div className="Block1">
                        <a href={props.url}><img src={props.NewsImage} className="pics" alt={` By ${props.Author}`}/> </a>
                        <p className='title'>{props.NewsTitle}</p>
                    </div>
                    <div className="Block2">                                
                        <a className="button2" href={props.RMore} >Read More</a>                                                        
                    </div>

                    <div className="Block3">
                        <p>{`${props.NewsDate} ${props.NewsTime}`}</p>
                        <p>{props.Author}</p>
                    </div>                            
                </div>
            
       </main>
       
    )
}
