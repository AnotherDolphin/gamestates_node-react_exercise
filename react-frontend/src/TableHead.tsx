import React, { useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiTimer2Line } from 'react-icons/ri'
import { FiFilter } from 'react-icons/fi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { useOutsideAlerter } from './util'

const genres = [
  'MOBA',
  'MMORPG',
  'RPG',
  'Action RPG',
  'FPS',
  'Stealth',
  'Sandbox',
  'Card Game',
  'Sport',
  'Multiplayer',
]

const platforms = ['PC', 'PS3', 'Xbox 360', 'PS4', 'Xbox One', 'Nintendo Switch', 'PS5', 'Android']

interface Props {
  title: string
  filters: string[]
  setGenre: Function
}

export default function TableHead({ title, filters, setGenre }: Props) {
  const [filterMenuOpen, setFilterMenu] = useState(false)
  const filterMenuRef = useRef(null)
  useOutsideAlerter(filterMenuRef, setFilterMenu)

  const [genreMenuOpen, setGenreMenu] = useState(false)
  const [genreText, setGenreText] = useState('')
  const [genreList, filterGenreList] = useState(genres)
  const [selectedGenre, setSelectedGenre] = useState('')
  const genreMenuRef = useRef(null)
  useOutsideAlerter(genreMenuRef, setGenreMenu)

  const [platformMenuOpen, setPlatformMenu] = useState(false)
  const platformMenuRef = useRef(null)

  return (
    <div className='flex justify-between relative'>
      <h1 className='text-4xl'>
        Top Games by {title}
        {title == 'playtime' ? (
          <RiTimer2Line className='animate-clock text-6xl inline ml-4' />
        ) : (
          <IoGameControllerOutline className='animate-shake text-6xl inline ml-4' />
        )}
      </h1>
      <div ref={genreMenuRef} className='self-center menu-button relative'>
        <div className='flex gap-2 items-center' onClick={() => setGenreMenu(!genreMenuOpen)}>
          <FiFilter />
          {selectedGenre != '' ? selectedGenre : 'Genre'}
        </div>
        <input
          className={`${genreMenuOpen ? '' : 'hidden'} text-black px-2 w-16`}
          type='text'
          defaultValue={genreText ?? 'Search..'}
          onChange={event => {
            setGenreText(event.target.value)
            filterGenreList(
              genres.filter(val => val.toLowerCase().includes(event.target.value.toLowerCase()))
            )
          }}
        ></input>
        <div className={`${genreMenuOpen ? 'menu open' : 'menu'}`}>
          {genreList.map((x, i) => (
            <div
              onClick={() => {
                setSelectedGenre(x)
                setGenreMenu(false)
                setGenre(x)
              }}
              key={i}
              className='menu-item'
            >
              {x}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={filterMenuRef}
        onClick={() => setFilterMenu(!filterMenuOpen)}
        className='menu-button'
      >
        <AiOutlinePlus /> add filter
        <div className={filterMenuOpen ? 'menu open' : 'menu'}>
          <div className='menu-item'>Genre</div>
          <div className='menu-item'>Platform</div>
        </div>
      </div>
    </div>
  )
}
