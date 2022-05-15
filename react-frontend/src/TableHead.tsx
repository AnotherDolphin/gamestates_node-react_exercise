import { useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import { RiTimer2Line } from 'react-icons/ri'
import { IoGameControllerOutline } from 'react-icons/io5'
import { genres, platforms, useOutsideAlerter } from './util'
import TableFilterBox from './TableFilterBox'

interface Props {
  title: string
  setGenre: Function
  setPlatform: Function
  currentGenre: string
  currentPlatfrom: string
}

export default function TableHead({
  title,
  setGenre,
  setPlatform,
  currentGenre,
  currentPlatfrom,
}: Props) {
  const [filterMenuOpen, setFilterMenu] = useState(false)
  const filterMenuRef = useRef(null)
  useOutsideAlerter(filterMenuRef, setFilterMenu)

  const [genreMenuOpen, setGenreMenuOpen] = useState(false)
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false)

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
      <TableFilterBox
        menuOpen={genreMenuOpen}
        currentFilter={currentGenre}
        setFilter={setGenre}
        setMenuOpen={setGenreMenuOpen}
        filterOptions={genres}
      />
      <TableFilterBox
        menuOpen={platformMenuOpen}
        currentFilter={currentPlatfrom}
        setFilter={setPlatform}
        setMenuOpen={setPlatformMenuOpen}
        filterOptions={platforms}
      />

      <div
        ref={filterMenuRef}
        onClick={() => setFilterMenu(!filterMenuOpen)}
        className='menu-button flex'
      >
        <AiOutlinePlus /> add filter
        <div className={filterMenuOpen ? 'menu open' : 'menu'}>
          <div onClick={() => setGenreMenuOpen(true)} className='menu-item'>
            Genre
          </div>
          <div onClick={() => setPlatformMenuOpen(true)} className='menu-item'>
            Platform
          </div>
        </div>
      </div>
      {(currentGenre||currentPlatfrom) && <button
        className='bg-slate-900 rounded-3xl self-center flex items-center shadow-xl px-2 py-1'
        onClick={() => {
          setGenre('')
          setPlatform('')
        }}
      >
          <MdOutlineCancel />
          <h3 className='text-sm text-ba'>clear</h3>
      </button>}
    </div>
  )
}
