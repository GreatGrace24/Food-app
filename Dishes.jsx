import React from 'react'
import ListCard from '../Card/ListCard'

function Dishes() {

    const foods = [ 
        {
            id: 1,
            description: "Pizza",
            link: "#",
            image:"/assets/image/pizza.png"
        },
        {
            id: 2,
            description: "Burger",
            link: "#", 
            image:"/assets/image/burger.png"

        }, {
            id: 3,
            description: "Sushi",
            link: "#", 
            image:"/assets/image/sushi.png"
        }
    ]

    const moreFood = [ 
        {
            id: 4,
            description: "Pasta",
            link: "#",
            image:"/assets/image/pasta.png"
        },
        {
            id: 5,
            description: "Salad",
            link: "#", 
            image:"/assets/image/salad.png"

        }, {
            id: 6,
            description: "Desserts",
            link: "#", 
            image:"/assets/image/dessert.png"
        }
    ]
  return (
<section>
    <div className=' flex justify-center flex-col text-center mt-5 md:mt-10 '>
        <h2 className=' text-primaryText text-3xl md:text-5xl'>More Than  <span className='text-[#FF5331]'>10, 000</span> Dishes <br/> To Order!</h2>
