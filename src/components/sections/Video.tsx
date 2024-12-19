import React from 'react'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import style from './Video.module.scss'

const cx = classNames.bind(style)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop poster="/assets/videos/poster.jpg">
        <source src="/assets/videos/medium.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}

export default Video
