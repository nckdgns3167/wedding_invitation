import { Swiper, SwiperSlide } from 'swiper/react'

import React from 'react'
import classNames from 'classnames/bind'
import style from './ImageViewer.module.scss'

import './swiper.css'
import Dimmed from '@shared/Dimmed'
import generateImageUrl from '@utils/generateImageUrl'

const cx = classNames.bind(style)

const ImageViewer = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) => {
  if (!open) return null
  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={selectedIdx}
      >
        {images.map((src, i) => {
          return (
            <SwiperSlide key={i}>
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                  })}
                  type="image/webp"
                />
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                  })}
                  alt="사진첩 이미지"
                />
              </picture>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Dimmed>
  )
}

const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) => (
  <svg
    className={className}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClose}
  >
    <title />
    <g>
      <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z" />
      <path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z" />
    </g>
  </svg>
)

export default ImageViewer
