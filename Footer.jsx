import React from 'react'


function Footer(){
  return(
     <Footer className=" flex flex-bg-gray-900 text-white ">
    <section className="flex flex-col md:flex-row justify-between md:space-x-5 w-full ">
<div className="flex flex-col mr-4 items-left md:w-[35%]">
<div className="flex p-auto">
<img src="/assets/image/pizza.png"/>
</div>
  <div className='flex  space-x-5 md:mt-10 mt-5'>
  <img src="/assets/image/apple.svg" className='cursor-pointer w-10 h-10'/>
  <img  src="/assets/image/google.svg" className='cursor-pointer w-10 h-10'/>
</div>
    
  </div>
      
  <div className="container md:w-[60%] mx-auto py-4">
    <div className="grid grid-cols-2 md:grid-cols-4">
      {/* Column 1 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">Quick links</h3>
        <ul className="list-reset">
          <li className="mb-2"><a href="#" className="hover:underline">Features</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Food Menu</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Offer</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Review</a></li>
<li className="mb-2"><a href="#" className="hover:underline">Rider</a></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">News</h3>
        <ul className="list-reset">
          <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Lift Media</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
<li className="mb-2"><a href="#" className="hover:underline">Press Kit</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">Get to Know Us</h3>
        <ul className="list-reset">
          <li className="mb-2"><a href="#" className="hover:underline">Gift Cards</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">DoorDash Stories</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">LinkedIn</a></li>
<li className="mb-2"><a href="#" className="hover:underline">Glassdoor</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Accessibility</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">Contact</h3>
        <ul className="list-reset">
          <li className="mb-2"><a href="#" className="hover:underline">WhatsApp</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Support 24</a></li>
          
        </ul>
      </div>
    </div>
  </div>
      <div className=" flex flex-col mt-5 md:flex-row col-span-4 sm:col-span-2 md:col-span-1 text-center justify-between p-4">
            <p className="text-xs">&copy; 2023 pizza. All right reserved</p>
        <div className="flex  space-x-4">
        <ul className="list-reset">
          <li><a href="#" className="hover:underline">Privacy</a></li>
          <li><a href="#" className="hover:underline">Policy</a></li>
          <li><a href="#" className="hover:underline">Terms</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
        </ul>
        </div>
          </div> 
    </section>
       
     </Footer>
   )
}
export default Footer
