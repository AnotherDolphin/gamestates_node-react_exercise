import { Game, Options, useCase } from './interfaces'

// form game Map from data
export const gameMap = (dataSet: {data: object}): Map<string, Game> => {
  const dataArr = dataSet.data as useCase[]
  const map = new Map<string, Game>()
  dataArr.forEach(entry => {
    const gameId = entry.game.replaceAll(' ', '_')
    if (map.has(gameId)) {
      const gameRef = map.get(gameId)!
      gameRef.totalPlayTime += entry.playTime
      gameRef.totalPlayers += 1
      return
    }
    map.set(gameId, {
      game: entry.game,
      genre: entry.genre,
      platforms: entry.platforms,
      totalPlayTime: entry.playTime,
      totalPlayers: 1,
    })
  })
  return map
}

// map filter utility function
export const filter = (arr: [string, Game][], options: Options) => {
  if (options.genre) arr = arr.filter(val => options.genre == val[1].genre)
  if (options.platform)
    arr = arr.filter(val => val[1].platforms.includes(options.platform!))
  return arr
}
