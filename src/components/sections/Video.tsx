import React from 'react'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import style from './Video.module.scss'

const cx = classNames.bind(style)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop poster="/assets/videos/poster.jpg">
        <source
          src="/assets/videos/길이줄인영상-Medium.webm"
          type="video/mp4"
        />
        <source src="/assets/videos/길이줄인영상-Medium.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
