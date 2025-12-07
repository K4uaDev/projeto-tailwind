import React from 'react'

const DescricaoCard = (props) => {
  return (
    <div>
        <p className="text-white">
            {props.children}
        </p>
    </div>
  )
}

export default DescricaoCard