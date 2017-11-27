import React from 'react'

const Container = ({
  children,
  fluid = false
}) => (
  <div className={ fluid ? 'container-fluid' : 'container' }>
    { children }
  </div>
)

export default Container