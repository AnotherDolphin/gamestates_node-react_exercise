import React, { MutableRefObject, Ref, useEffect, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiTimeLine } from 'react-icons/ri'
import { Game } from './interfaces'
import TableBody from './TableBody'
import TableHead from './TableHead'

const tableHeads = ['Game', 'Genre', 'Platfroms']

export default function Table({ by }: { by: string }) {
  const [data, setData] = useState<Game[]>([])
  const [platform, setPlatform] = useState<string>('')
  const [genre, setGenre] = useState<string>('')

  const getData = async () => {
    let url = `http://localhost:4000/${by}?`
    if (platform) url += 'platform=' + platform + '&'
    if (genre) url += 'genre=' + genre    
    const res = await fetch(url)
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    getData()
  }, [genre, platform])

  return (
    <div className='flex-col items-end gap-8 w-3/4 h-1/2'>
      <TableHead title={by} setGenre={setGenre} setPlatform={setPlatform} currentGenre={genre} currentPlatfrom={platform}/>
      <TableBody
        headers={[...tableHeads, by == 'playtime' ? 'Total play time' : 'Total players']}
        data={data}
      />
    </div>
  )
}
