import React from 'react'
import classNames from 'classnames/bind'
import style from '@shared/Dimmed.module.scss'

const cx = classNames.bind(style)

const Dimmed = ({ children }: { children: React.ReactNode }) => {
  return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed
