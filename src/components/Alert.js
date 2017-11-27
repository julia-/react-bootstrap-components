import React from 'react'

const Alert = ({
  role,
  alertType = 'primary',
  children
}) => (
    <div className={ `alert alert-${alertType}` } role={ role } >
      { children }
    </div>
)

export default Alert