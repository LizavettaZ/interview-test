import React from 'react'
import Read from '../../img/icons/Time.svg'
import classes from './Time.module.scss'


const Time = ({ time, my }) => {
  const period = new Date(time * 1000)

  return (
    <div className={classes.Time}>
      <span>
        {`${period.getHours() + 1 < 10 ? '0' + (period.getHours() + 1) : period.getHours() + 1}:
          ${period.getMinutes() < 10 ? '0' + period.getMinutes() : period.getMinutes()}
        `}
      </span>
      {my && <img src={Read} alt="Time" />}
    </div>
  )
}

export default Time
