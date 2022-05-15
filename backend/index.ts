import express from 'express'
import cors from 'cors'
import dataSet from './games.json'
import { select_top_by_players, select_top_by_playtime } from './functions'
import { Genre, Options, Platform } from './interfaces'

const app = express()
app.use(cors())

app.listen(4000, () => {
  console.log('Server started on :4000 ...')
})

app.get('/playtime', (req, res) => {
  const options: Options = {
    genre: req.query.genre as Genre ?? '',
    platform: req.query.platform as Platform ?? ''
  }
  console.log(options);
  
  res.json(select_top_by_playtime(dataSet, options))
})

app.get('/players', (req, res) => {
  const options: Options = {
    genre: req.query.genre as Genre ?? '',
    platform: req.query.platform as Platform ?? ''
  }
  res.json(select_top_by_players(dataSet, options))
})
