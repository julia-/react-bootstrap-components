import React from 'react'

const ProgressBar = ({
  bgColor,
  striped = false,
  currentValue,
  divStyle =
  {
    width: `${currentValue}%`
  }
}) => {
  if (striped === true) {
    if (bgColor != null) {
      return (
        <div class="progress">
          <div class={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={divStyle} aria-valuenow={currentValue} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )
    } else {
      return (
        <div class="progress">
          <div class={`progress-bar progress-bar-striped`} role="progressbar" style={divStyle} aria-valuenow={currentValue} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )
    }
  } else if (bgColor != null) {
    return (
      <div class="progress">
        <div class={`progress-bar bg-${bgColor}`} role="progressbar" style={divStyle} aria-valuenow={currentValue} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    )
  }
  else {
    return (
    <div class="progress">
      <div class="progress-bar" role="progressbar" style={ divStyle } aria-valuenow={currentValue} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    )
  }
}

export default ProgressBar