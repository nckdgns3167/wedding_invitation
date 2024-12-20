import React, { useEffect, useRef } from 'react'
import { useModalContext } from '@contexts/ModalContext'
import { Wedding } from '@models/wedding'

const AttendCountModal = ({ wedding }: { wedding: Wedding }) => {
  const { open, close } = useModalContext()

  const $input = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal) return
    open({
      title: `현재 참석자 ${wedding.attendCount} 명`,
      body: (
        <div style={{ display: 'flex' }}>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해 주세요."
            style={{ flex: 1 }}
          />
        </div>
      ),
      onLeftButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
      onRightButtonClick: async () => {
        const value = $input.current?.value
        if (!value) return

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number(value),
          }),
        })

        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })
  }, []) // eslint-disable-line

  return null
}

export default AttendCountModal
