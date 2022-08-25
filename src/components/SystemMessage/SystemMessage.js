import React, { memo } from 'react'
import classes from './SystemMessage.module.scss'

const SystemMessage = ({ time }) => {
  const date = new Date(time * 1000)

  return (
    <div className={classes.SystemMessage}>
      <p>
        {`${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()  }.
        ${date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth()}.
        ${date.getFullYear()}`}
      </p>
    </div>
  )
}

export default memo(SystemMessage)
