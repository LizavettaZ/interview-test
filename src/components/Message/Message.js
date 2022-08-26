import React from 'react'
import Time from '../Time/Time'
import classes from './message.module.scss'
import { Avatar } from '../Avatar'


const Message = ({ chat }) => {
  const { created_at: time, message, user } = chat
  const { avatar, name, surname, you} = user
  const cls = [
    classes.Message,
    you && classes.My
  ]

  return (
    <div className={cls.join(' ')}>
      {!you && <Avatar src={avatar} size={'sm'} />}
      <div className={classes.Message__description}>
        {!you && <h6 className={classes.description__title}>{`${name} ${surname}`}</h6>}
        <div className={classes.description__text}>
          <p>{message}</p>
          <Time time={time} my={you}/>
        </div>
      </div>
    </div>
  )
}

export default Message
