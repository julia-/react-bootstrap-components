import React from 'react'

const Form = ({
  action,
  method,
  children
}) => (
  <form action={ action } method={ method }>
    { children }
  </form>
)

const FormGroup = ({
  children
}) => (
  <div className="form-group">
      { children }
  </div>
)

const FormLabel = ({
  children
}) => (
  <label>
    { children }
  </label>
)

const FormInput = ({
  formId,
  sizing,
  formType = 'text'
}) => {
  if (sizing != null) {
    return (
      <input type={ formType } className={ `form-control-${sizing}` } id={ formId } />
    )
  } else {
    return (
      <input type={ formType } className={ `form-control` } id={ formId } />
    )
  }
}

export { Form, FormGroup, FormLabel, FormInput }