import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';


  return (
    <>

      <h1 className='bg-blue-500 text-black rounded-xl p-3 m-3 inline-block hover:shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer'>Alphabets</h1>
      <div className='flex flex-wrap m-2'>
        {
          alphabet.split('').map(char => (
            <Card char={char} />
          ))
        }

      </div>
    </>
  )
}

export default App
