import React, { useState } from 'react'

function Shop() {
  const [count, setCount] = useState(0)
  
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }


  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  )
}

export default Shop;

