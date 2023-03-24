import React from 'react'

function Button({ label }) {
  return (
    <a className=' bg-primary-500 font-bold text-white leading-[1em] typo-base tracking-wide px-6 py-4 inline-block cursor-pointer rounded-full hover:bg-primary-700 transition-colors duration-200'>{label}</a>
  )
}

export default Button