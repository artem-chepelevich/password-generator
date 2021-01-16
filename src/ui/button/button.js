import React from 'react'
import cx from 'clsx'
import PropTypes from 'prop-types'

import styles from './button.module.css'

function Button({ children, className, type, onClick, ...rest }) {
  return (
    <button type={type} className={cx(styles['button'], className)} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export { Button }
