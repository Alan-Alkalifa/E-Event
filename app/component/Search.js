import React from 'react'
import Image from 'next/image'

const Search = () => {
  return (
    <form className='py-3 px-4 m-1 rounded-lg text-xs text-yellow-300 border border-yellow-300 flex gap-2 bg-blue-900 w-60'>
      <Image
        src="/SearchIcon.svg"
        height={20}
        width={20}
        alt=''
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-yellow-300 placeholder-yellow-300 flex-grow"
      />
    </form>
  )
}

export default Search