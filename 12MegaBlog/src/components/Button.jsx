import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    //ClassName mostly taken empty 
    className ="",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}>
      {children} {...props}
    </button>
  )
}{
    children
}

export default Button
