import React, { useEffect } from 'react'
import { useState} from 'react'
import Restcard from './Restcard'

function Restlist() {

const [AllRestaurants,setAllRestaurants] = useState([])


//function to call API to get data from restaurentd json
  
const getRestaurants=async()=>{
 await fetch('./restaurants.json')   
 .then((data)=>{
    data.json()
    .then((result)=>{
        // console.log(result);
        setAllRestaurants(result.restaurants)//10
    })
   
 })
}
console.log(AllRestaurants);

useEffect( ()=>{
    getRestaurants()
},[])


return (
<div>
   {
    AllRestaurants.map((item)=>(
        <Restcard restaurant={item}/>
        // <h1>{item.name}</h1>
        ))
   }
</div>
  )
}

export default Restlist