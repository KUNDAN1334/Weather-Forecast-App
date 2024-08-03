import React from 'react'

const input = () => {
  return (
    <input className='input-field'
     placeholder={props.placeholder}
     value={props.value}
      onChange={props.onChange}
       />
  )
}

export default input