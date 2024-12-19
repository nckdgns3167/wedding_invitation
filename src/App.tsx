import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import styles from './App.module.scss'

import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'

import { Wedding } from '@models/wedding'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <FullScreenMessage type="loading" />
  if (error) return <FullScreenMessage type="error" />

  if (wedding == null) return null

  const { date } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      {/*{JSON.stringify(wedding)}*/}
    </div>
  )
}

export default App
