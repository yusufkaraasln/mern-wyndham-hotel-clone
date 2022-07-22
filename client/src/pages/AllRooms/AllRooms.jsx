import React from 'react'
import RoomsDetail from '../../components/RoomsDetail/RoomsDetail'
import {Outlet} from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'
function AllRooms() {
  
  return (
    <div>
      <Navbar></Navbar>
        <RoomsDetail></RoomsDetail>

    </div>
  )
}

export default AllRooms