import express from 'express'
import dataSet from './games.json'
import {select_top_by_players, select_top_by_playtime} from './functions'

const app = express()

app.listen(3000, () => {
  console.log('Server started on :3000 ...')
})

app.get('/', (req, res) => {
  // const output= 
  
  res.json(select_top_by_playtime(dataSet))
})

