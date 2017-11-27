import React from 'react'

const Card = ({
  bgColor = 'light',
  textColor = 'dark',
  children
}) => (
  <div className={`card bg-${bgColor} text-${textColor}` }>
    { children }
  </div>
)

const CardHeader = ({
  children
}) => (
  <div className="card-header">
    { children }
  </div>
)

const CardBody = ({
  children
}) => (
  <div className="card-body">
    { children }
  </div>
)

const CardTitle = ({
  children
}) => (
  <h4 className="card-title">
    { children }
  </h4>
)

const CardText = ({
  children
}) => (
  <p className="card-text">
    { children }
  </p>
)

export { Card, CardHeader, CardBody, CardTitle, CardText }