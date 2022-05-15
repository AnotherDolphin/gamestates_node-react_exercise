export interface useCase {
  userId: number
  game: string
  playTime: number
  genre: Genre
  platforms: Platform[]
}

export interface Game {
  game: string
  genre: Genre
  platforms: Platform[]
  totalPlayTime: number
  totalPlayers: number
}

export enum Genre {
  MOBA = 'MOBA',
  MMORPG = 'MMORPG',
  RPG = 'RPG',
  Action_RPG = 'Action RPG',
  FPS = 'FPS',
  Stealth = 'Stealth',
  Sandbox = 'Sandbox',
  Card_Game = 'Card Game',
  Sport = 'Sport',
  Multiplayer = 'Multiplayer',
}

export enum Platform {
  PC = 'PC',
  PS3 = 'PS3',
  Xbox_36 = 'Xbox 360',
  PS4 = 'PS4',
  Xbox_One = 'Xbox One',
  Nintendo_Switch = 'Nintendo Switch',
  PS5 = 'PS5',
  Android = 'Android',
}

export interface Options {
  genre?: Genre
  platform?: Platform
}

export type rawData = { data: object }
