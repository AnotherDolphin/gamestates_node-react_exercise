import React, { useEffect, useState } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiTimeLine } from 'react-icons/ri'

function App() {

  const [data, setData] = useState({})

  const getData = async () => {
    const data = await fetch('http://localhost:4000')
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='flex-col items-end gap-8'>
          <h1 className='text-4xl'>
            Top Games by Playtime <RiTimeLine className='text-6xl inline' />{' '}
          </h1>
          <div>
            <div></div>
            <button className='flex items-center gap-2 text-base text-gray-300 border-2 border-gray-300 rounded-2xl px-2 py-1'>
              <AiOutlinePlus /> add filter
            </button>
          </div>
          {JSON.stringify(data)}
        </div>
      </header>
    </div>
  )
}

export default App
