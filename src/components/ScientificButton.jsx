import React from 'react'

const ScientificButton = ({button}) => {
    return (
        <button className='hover:scale-105 active:scale-100 h-12 min-wi-1/3 flex items-center justify-center text-white text-3xl hover:bg-gradient-to-br bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 rounded-md'>
        {button}
        </button>
      )
    }

export default ScientificButton