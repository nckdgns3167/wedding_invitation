import React from 'react'
import { parseISO, format, getDay } from 'date-fns'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import style from './Heading.module.scss'

const cx = classNames.bind(style)

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Heading = ({ date }: { date: string }) => {
  const weedingDate = parseISO(date)
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weedingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weedingDate)]}</div>
    </Section>
  )
}

export default Heading
