import React from 'react'


function Testimonial() {
   return (
     <section>
       <div className="flex justify-center flex-col text-center mt-5 md:mt-10">
<h1 className="text-primaryText font-semibold text-3xl md:text-5xl">Our Clients Feedbacks</h1>
         <p className="text-primaryText font-[400] mt-3 text:sm md:text-base  lg:text-lg">The food at your doorstep. Why starve when you have us. You hunger<br/> partner. Straight out of the oven to your doorstep.</p>
       </div>
       <div className="flex justify-center">
<img src="/assets/image/quotered.png" className="mt-5"/>
       </div>
       <div>
<p className="text-primaryText text-5xl md:text-2xl italic font-900 text-center mt-5 md:mt-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
       </div>
       <h2 className="text-primaryText mt-5 font-bold justify-center text-center">Mitchell Marsh</h2>
       <p className="text-primaryText text-sm font-normal mt-2 text-center">CEO, Bexon Agency</p>
       <div className="flex flex-row gap-3 justify-center mt-3">
  <img src="/assets/image/arrow.png" /> 
<img src="/assets/image/redarrow.png" />


       </div>
     </section>
   )
}

export default Testimonial
