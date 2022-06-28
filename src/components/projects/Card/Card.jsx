import React from 'react'

const Card = (props) => {
    return (<div className='card'>
    <div className="card-body">
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-desc'>{props.desc}</p>

    </div>
    <button className='card-btn'><a href={props.url} target="_blank"> Check Out</a></button>
     </div> 
)
}

export default Card


