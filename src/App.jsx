import { useState } from 'react'

// import Blog from './Blog'

import UserCard from './Usercard'

function App() {
  return(
    <>

    <UserCard 
    Name={"Ahmed"}
    Email={"sadakc15@gmail.com"}
    />
    <UserCard 
    Name={"Ali"}
    Email={"sadakc15@gmail.com"}
    />
    <UserCard 
    Name={"Ahmed"}
    Email={"ahmed@gmail.com"}
    />
    <UserCard 
    Name={"Maryan"}
    Email={"maryan@gmail.com"}
    />

    </>
  )
}

export default App
