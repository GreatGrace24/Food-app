import React from 'react'

function Search({type, placeholder, btnText, clickHandler}) {
  return (
    <div className='w-full relative  '>
        <input
        type={type}
        placeholder={placeholder}
        className='rounded-full pl-5 outline-0  py-3 px-3 text-sm placeholder:text-xs bg-[#F6F6F6] w-full border-none placeholder:text[#AFAFAF] '
        />

        <button 
        onClick={clickHandler}
        className=' absolute right-0 top-0.5 rounded-full px-2 py-3 bg-primary text-white text-xs'>
            {btnText}
        </button>
    </div>
  )
}

export default Search
