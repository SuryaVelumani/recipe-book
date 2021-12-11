import React from 'react'
function Card({ src, title, description, price }) {
    return (
        <div className='p-4 items-center rounded-md bg-primary shadow-2xl h-80 w-80'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card