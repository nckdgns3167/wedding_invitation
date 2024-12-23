import React from 'react'
import classNames from 'classnames/bind'

import { format, parseISO } from 'date-fns'
import Section from '@shared/Section'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
import style from './Calendar.module.scss'

const cx = classNames.bind(style)

const day_picker_css = `
    .rdp-nav, .rdp-month_caption {
      display: none;
    }
    .rdp-weekday {
      font-size: 14px;
      font-weight: bold;
    }
    .rdp-day button {
      cursor: default;
    }
    .rdp-day.rdp-selected button {
      background-color: var(--red);
      font-weight: bold;
      color: #fff;
      border: none !important;
    }
    .rdp-day.rdp-selected button:hover {
      background-color: var(--red);
    }
`

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{day_picker_css}</style>
        <DayPicker
          locale={ko}
          mode="single"
          selected={weddingDate}
          month={weddingDate}
          formatters={{ formatCaption: () => '' }}
          onSelect={() => weddingDate}
        />
      </div>
    </Section>
  )
}

export default React.memo(Calendar)
