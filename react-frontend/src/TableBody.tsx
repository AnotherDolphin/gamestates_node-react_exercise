import React from 'react'
import { Game } from './interfaces'

export default function TableBody({ headers, data }: { headers: string[]; data: Game[] }) {
  return (
    <table className='my-4 text-base w-full'>
      <tbody className='overflow-auto max-h-[25vh] w-full block'>
        <tr className='bg-gray-900 flex w-full py-1'>
          {headers.map((head, i) => (
            <th key={i} className='font-normal flex-1 px-4'>
              {head}
            </th>
          ))}
        </tr>
        {data.map((val, i) => (
          <tr className='text-gray-200 flex w-full' key={i}>
            <td className='flex-1 p-2 border-b-[1px] border-gray-700'>{val.game}</td>
            <td className='flex-1 p-2 border-b-[1px] border-gray-700'>{val.genre}</td>
            <td className='flex-1 p-2 border-b-[1px] border-gray-700'>
              {val.platforms.join(', ')}
            </td>
            {headers.includes('Total play time') ? (
              <td className='flex-1 p-2 border-b-[1px] border-gray-700'>{val.totalPlayTime}</td>
            ) : (
              <td className='flex-1 p-2 border-b-[1px] border-gray-700'>{val.totalPlayers}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
