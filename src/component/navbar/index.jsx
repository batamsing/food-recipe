import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context'

export default function Navbar() {
  const {search, setSearch, handleSearch} = useContext(GlobalContext)

  return (
    <nav className='flex justify-between py-4 px-6 shadow-md '>
      <h2 className='text-lg font-bold'>
        <NavLink to="/">Food Recipe</NavLink>
      </h2>
      <form className=''
        onSubmit={handleSearch}
      >
        <input
          className='rounded-full min-w-80 shadow-sm py-2 px-3 outline outline-gray-400 outline-1'
          type='text'
          value={search}
          id='searchInput'
          onChange={e => setSearch(e.target.value)}
          name='search'
          placeholder='Search recipes...'
        />
      </form>
      <ul className='flex flex-col items-end lg:flex-row md:flex-row gap-x-5'>
        <li className='hover:font-bold'>
          <NavLink
            to={'/'}

          >
            Home
          </NavLink>
        </li>
        <li className='hover:font-bold'>
          <NavLink
            to={'/favorites'}

          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
