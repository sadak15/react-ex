import { useState } from 'react'

import ToggleButton from './ToggleButton';

function App() {
  const [count, setStcount]= useState(0);
  const Increment = () => {
    setStcount(count + 1)
    console.log(count)
  }

  return(
    <>
      <ToggleButton />
    </>
  )
}

export default App
