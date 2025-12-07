import React from 'react'

const numberCard = (props) => {
  return (
    <div>
        <div className="bg-orange-600 p-1 rounded-sm inline font-semibold m-">{props.children}</div>
    </div>
  )
}

export default numberCard