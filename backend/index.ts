import express from 'express'
import cors from 'cors'
import dataSet from './games.json'
import { select_top_by_players, select_top_by_playtime } from './functions'

const app = express()
app.use(cors())

app.listen(4000, () => {
  console.log('Server started on :4000 ...')
})

app.get('/', (req, res) => {
  res.json(select_top_by_playtime(dataSet))
})
