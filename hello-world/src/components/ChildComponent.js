import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('Sodhi Singh Jr.')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
