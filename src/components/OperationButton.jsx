import React from 'react'

const OperationButton = ({button, onClick}) => {
  return (
    <button className='hover:scale-105 active:scale-100 h-12 min-w-1/3 flex items-center justify-center text-white text-4xl hover:bg-gradient-to-br bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 rounded-md'
      onClick={onClick} // Attach the onClick handler
    >
    {button}
    </button>
  )
}

export default OperationButton