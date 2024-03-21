import React from 'react'

function Card({ char }) {
    return (
        <div className='flex-col items-center justify-center text-black bg-green-300 rounded-xl m-2 p-4 hover:shadow-lg transform hover:scale-105 transition-shadow duration-300 cursor-pointer'>
            <h1>{char.toUpperCase()}</h1>
            <h1>{char}</h1>
        </div>
    )
}

export default Card