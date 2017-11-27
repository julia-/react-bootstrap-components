import React from 'react'

const Button = ({
  title,
  variation = 'dark',
  href
}) => {
  const Component = (href != null) ? 'a' : 'button'
  return (
    <Component
      href={ href }
      className={ `btn btn-${variation}` }
    >
      { title }
    </Component>
  )
}

const ButtonGroup = ({
  buttonType = 'group',
  inputGroup = false,
  sizing,
  children
}) => {
  if (inputGroup === true) {
    return (
      <div className="input-group" role={buttonType} >
        {children}
      </div>
    )
  } else {
    return (
      <div className={`btn-${buttonType}`} role={ buttonType} >
        {children}
      </div>
    )

  }
}

export {Button, ButtonGroup}