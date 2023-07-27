import React, { useState } from 'react'
import "./resturant.css"
import Menu from './menuapi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList =  [... new Set(Menu.map((curELm)=> {
  return curELm.category;
})),
"All"]
console.log(uniqueList)

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, newmenulist] =useState(uniqueList);
  
  const filterItem = (category) => {

    if(category==="All"){
        setMenuData(Menu)
        return;
    }

    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category
    })
    setMenuData (updatedList)
  };


  return (
   <>
   <Navbar  filterItem = {filterItem} menuList = {menuList}/>
   <MenuCard SendingMenu = {menuData} />
   </>
  )
}

export default Resturant 