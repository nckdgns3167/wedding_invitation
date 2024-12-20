import React, {
  ComponentProps,
  createContext,
  useContext,
  useState,
} from 'react'

import Modal from '@shared/Modal'
import { createPortal } from 'react-dom'

type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, 'open'>

interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onLeftButtonClick: () => {},
  onRightButtonClick: () => {},
}

export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues)

  const $portal_root = document.getElementById('root-portal')

  const open = (options: ModalOptions) =>
    setModalState({ ...options, open: true })

  const close = () => setModalState(defaultValues)

  const value = { open, close }

  return (
    <Context.Provider value={value}>
      {children}
      {$portal_root && createPortal(<Modal {...modalState} />, $portal_root)}
    </Context.Provider>
  )
}

export const useModalContext = () => {
  const values = useContext(Context)
  if (!values) {
    throw new Error('useModalContext must be used within a ModalContext')
  }
  return values
}
