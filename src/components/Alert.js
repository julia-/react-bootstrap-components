import React from 'react'

const Alert = ({
  alertType = 'primary',
  children
}) => (
  <div className={ `alert alert-${alertType}` }>
    { children }
  </div>
)

export default Alert