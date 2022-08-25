import React, { memo } from 'react'
import classes from './stubPage.module.scss'


const StubPage = () => {
  return (
    <div className={classes.StubPage}>
      ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
    </div>
  )
}

export default memo(StubPage)

