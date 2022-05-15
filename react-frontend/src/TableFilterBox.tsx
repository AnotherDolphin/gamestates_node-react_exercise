import { useRef, useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import { useOutsideAlerter } from './util'

interface Props {
  menuOpen: boolean
  setMenuOpen: Function
  setFilter: Function
  filterOptions: string[]
}

export default function TableFilterBox({ menuOpen, setMenuOpen, setFilter, filterOptions }: Props) {
  const [searchText, setSearchText] = useState('')
  const [filterList, setFilterList] = useState(filterOptions)
  const [selectedFilter, setSelectedFilter] = useState('')
  const filterRef = useRef(null)
  useOutsideAlerter(filterRef, setMenuOpen)

  return (
    <div
      ref={filterRef}
      className={`${
        !menuOpen && !selectedFilter ? 'hidden' : 'flex'
      } self-center menu-button relative`}
    >
      <div className='flex gap-2 items-center' onClick={() => setMenuOpen(!menuOpen)}>
        <FiFilter />
        {menuOpen ? 'Genre' : selectedFilter}
      </div>
      <input
        className={`${menuOpen ? '' : 'hidden'} text-black px-2 w-16`}
        type='text'
        defaultValue={searchText ?? 'Search..'}
        onChange={event => {
          setSearchText(event.target.value)
          setFilterList(
            filterOptions.filter(val =>
              val.toLowerCase().includes(event.target.value.toLowerCase())
            )
          )
        }}
      ></input>
      <div className={`${menuOpen ? 'menu open' : 'menu'}`}>
        {filterList.map((x, i) => (
          <div
            onClick={() => {
              setSelectedFilter(x)
              setMenuOpen(false)
              setFilter(x)
            }}
            key={i}
            className='menu-item'
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  )
}
