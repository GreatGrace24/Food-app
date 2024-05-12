import React from 'react'
import Search from '../Search/Search'

function Subscribe(){
  return (
    <section className=" flex flex-col md:flex-row p-6 justify-between gap-5 md:space-x-5 w-full mt-10 bg-[#FFEFEC]">
      <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full md:w-[50%]">
     <p className="text-4xl text-primaryText font-bold md:text-3xl md:w-full">Subscribe our Newsletter</p>
        <p className="text-sm mt-3 md:w-full text-primaryText">Browse local restaurants and businesses for delivery by entering your address blow.</p>
      </div>
      <div className="mt-4 w-full md:w-[50%]">
      <Search className="md:w-full" type="text"
        placeholder='Enter your email address'
        btnText="Send"
        clickHandler={() => alert("I'M CLICKED OOOOO")}
         />
      </div>
      </div>
</section >
)}



export default Subscribe
