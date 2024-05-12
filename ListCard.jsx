import React from 'react'

function ListCard( {title, listImage, description}) {
  return (
    <div className='w-[168px] h-60 bg-[#FAFAFA] rounded-3xl flex flex-col justify-center items-center '>
    <div className='bg-white rounded-full  p-4'>
      <h3 className='text-red-500 font-medium'> {title}</h3>
        <img src={listImage}/>
    </div>
    <p className='mt-5 text-primaryText'>{description}</p>
</div>  )
}

export default ListCard
