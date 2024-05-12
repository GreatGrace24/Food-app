import React from 'react'
import ListCard from '../Card/ListCard'


   const Orders = [
     {    id: 1,
      title: "01",
            description: "Choose your location",
            link: "#", 
      image:"/assets/image/location.png"
        },
       { id: 2,
        title: "02",
            description: "Choose what to eat",
            link: "#", image:"/assets/image/man.png"
              },
     {   id: 3,
      title: "03",
            description: "Make your first order",
            link: "#", image:"/assets/image/burger.png"
              },
     {   id: 4,
      title: "04",
            description: "Now! your food in way",
            link: "#", image:"/assets/image/house.png"
              },
   ];


function Order() {
return (
<section>
<div className="flex justify-center flex-col text-center mt-5 md:mt-10">
  <h2 className=' text-primaryText font-semibold text-3xl md:text-5xl'>How to Order?</h2>
<div className='w-full flex flex-col md:flex-row mt-10 justify-between items-center md:space-x-20 md:space-y-0 space-y-10 '>
              
<div className='grid gap-1 grid-cols-2 md:grid-cols-3 w-full md:w-[100%]'>
                {
                    Orders.map((item) => (
                        <div key={item.id}> 
                         <ListCard
                           title={item.title}
                           
                        listImage={item.image}
                        description={item.description}
                        />
                        </div>
         
                    ))
                }

            </div>
</div>
  </div>
</section>
  
)}




export default Order;
