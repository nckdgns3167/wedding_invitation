import React, { useState } from 'react'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import 'swiper/css'
import style from './ImageGallery.module.scss'

import ImageViewer from '../imageViewer/ImageViewer'

const cx = classNames.bind(style)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handelSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, i) => (
            <li
              key={i}
              className={cx('wrap-image')}
              onClick={() => {
                handelSelectedImage(i)
              }}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
