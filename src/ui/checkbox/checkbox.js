import React from 'react'
import cx from 'clsx'
import PropTypes from 'prop-types'

import styles from './checkbox.module.css'

function Checkbox({ defaultChecked, className, name, id, onChange, ...rest }) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className={cx(styles['checkbox'], className)}
      onChange={onChange}
      {...rest}
      defaultChecked={defaultChecked}></input>
  )
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
}

export { Checkbox }
