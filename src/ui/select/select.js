import React from 'react'
import PropTypes from 'prop-types'

import styles from './select.module.css'

function Select({ options, onBlur }) {
  return (
    <select className={styles['select']} onBlur={onBlur}>
      {options &&
        options.map((option, index) => {
          return (
            <option key={index} name={option}>
              {option}
            </option>
          )
        })}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  setPasswordLength: PropTypes.func,
  onBlur: PropTypes.func
}

export { Select }
