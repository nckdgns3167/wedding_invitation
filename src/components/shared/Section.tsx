import React from 'react'
import classNames from 'classnames/bind'
import style from './Section.module.scss'

const cx = classNames.bind(style)

const Section = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string
}) => {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  )
}

export default Section