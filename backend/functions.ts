import { filter, gameMap } from './utilities'
import { Options, rawData } from './interfaces'

const select_top_by_playtime = (json: rawData, options: Options = {}) => {
  const data = gameMap(json)
  // sort
  let sorted = [...data.entries()].sort((a, b) => b[1].totalPlayTime - a[1].totalPlayTime)
  // filter
  console.log(options);

  if (options) sorted = filter(sorted, options)
  // convert map to unnamed obj array
  return sorted.map(val => val[1])
}

const select_top_by_players = (json: rawData, options: Options = {}) => {
  // sort
  const data = gameMap(json)
  let sorted = [...data.entries()].sort((a, b) => b[1].totalPlayers - a[1].totalPlayers)
  // filter  
  if (options) sorted = filter(sorted, options)
  // convert map to unnamed obj array
  return sorted.map(val => val[1])
}

export { select_top_by_players, select_top_by_playtime }
