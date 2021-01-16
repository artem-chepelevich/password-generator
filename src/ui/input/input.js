import React from 'react'
import cx from 'clsx'
import PropTypes from 'prop-types'

import styles from './input.module.css'

function Input({ type, placeholder, defaultValue, disabled, className, readonly, ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      readOnly={readonly}
      className={cx(styles['input'], className)}
      {...rest}></input>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  readonly: PropTypes.bool
}

export { Input }
