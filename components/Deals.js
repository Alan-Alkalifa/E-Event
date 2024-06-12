import React from 'react'

const Deals = () => {
  return (
    <section className='py-3 px-4 m-1 bg-blue-900 rounded-lg'>
      <div className='flex py-1'>
        <h1 className=' text-[41px] text-yellow-300'>Promote Your <span className='text-blue-900 bg-yellow-300 rounded-lg p-1'>Event</span> Here <br/> and get some benefits!</h1> 
      </div>
      <div className="flex justify-center py-3">
  <button className="flex items-center justify-center p-5 text-2xl h-8 me-3  font-semibold text-yellow-300  border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    Click Here !
  </button>
  </div>
    </section>
  )
}

export default Deals