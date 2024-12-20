import React, { useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Share.module.scss'
import Section from '@shared/Section'
import { Wedding } from '@models/wedding'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

import { CopyToClipboard } from 'react-copy-to-clipboard'

declare global {
  interface Window {
    Kakao: any
  }
}

const cx = classNames.bind(style)

const Share = ({
  groom,
  bride,
  date,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
  date: string
}) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js'
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groom.name} 💗 ${bride.name} 결혼합니다.`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', { locale: ko })}`,
        imageUrl:
          'https://img.freepik.com/premium-vector/cute-asian-groom-bride-characters-flat-design-style-vector-illustration_540284-382.jpg',
        link: {
          mobileWebUrl: window.location.origin, // http://localhost:3000/
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin, // http://localhost:3000/
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>
          <IconKakao />
        </button>
        {/** @ts-ignore */}
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button>
            <IconClipboard />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

const IconKakao = () => (
  <img
    title="카카오톡 공유하기"
    src="/assets/images/7595660_kakao_message_social_logo_icon.svg"
    alt="Kakao SVG"
  />
)

const IconClipboard = () => (
  <svg
    data-name="Design Convert"
    id="Design_Convert"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>
    <title>청첩장 링크 복사하기</title>
    <path d="M32,57A13,13,0,0,1,19,44V16a9,9,0,0,1,18,0V44a5,5,0,0,1-10,0V17a1,1,0,0,1,2,0V44a3,3,0,0,0,6,0V16a7,7,0,0,0-14,0V44a11,11,0,0,0,22,0V30a1,1,0,0,1,2,0V44A13,13,0,0,1,32,57Z" />
  </svg>
)

export default Share
