import React from 'react'

const Badge = (props) => {
  const pending = props.pending;
  const textColor = pending === true ? "text-purple" : "text-green" 
  return (
    <span className={`${textColor} bg-white font-bold px-2 py-1 rounded-full`}>{props.text}</span>
  )
}

export default Badge