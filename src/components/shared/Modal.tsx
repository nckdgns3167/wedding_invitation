import React from 'react'
import classNames from 'classnames/bind'
import style from './Modal.module.scss'
import Dimmed from '@shared/Dimmed'

const cx = classNames.bind(style)

interface ModalProps {
  open: boolean
  title?: string
  body?: React.ReactNode
  leftButtonLabel?: string
  onLeftButtonClick?: () => void
  rightButtonLabel?: string
  onRightButtonClick?: () => void
}

const Modal = ({
  open,
  title,
  body,
  leftButtonLabel = '닫기',
  onLeftButtonClick,
  rightButtonLabel = '확인',
  onRightButtonClick,
}: ModalProps) => {
  if (!open) return null
  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title && <div className={cx('txt-title')}>{title}</div>}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onLeftButtonClick}>{leftButtonLabel}</button>
            <button onClick={onRightButtonClick}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
