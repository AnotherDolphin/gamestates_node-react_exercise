import { useEffect, useState } from 'react'
import './App.css'
import { Game } from './interfaces'
import Table from './Table'

function App() {
  return (
    <div className='App p-12 flex-col gap-8 justify-around'>
      <Table by={'playtime'} />
      <Table by={'players'} />
    </div>
  )
}

export default App
