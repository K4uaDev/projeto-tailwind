import React from 'react'

const TitleCard = (props) => {
  return (
    <div>
        <h1 className="text-white  text-2xl font-semibold ">
            {props.children}
        </h1>
    </div>
  )
}

export default TitleCard