import React from 'react'

function classNameForWidth(width) {
  if (!width) {
    return 'col'
  }
  else {
    return `col-${width}`
  }
}

const Col = ({
  children,
  width
}) => (
  <div className={ classNameForWidth(width) }>
    { children }
  </div>
)
export default Col
