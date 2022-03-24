
import React from 'react'

function Checkbox({ weekName, handleClick, checked }) {

    const uncheck={
        backgroundColor:'#D8D8D8',
        color:'black',
    }

    const check={
        backgroundColor:'black',
        color:'white',
    }

    return (
        <div className='checkbox' onClick={(e) => handleClick(weekName, checked)} style={checked?check:uncheck}>
            {weekName[0]}
        </div>
    )
}

export default Checkbox