import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import styles from './App.module.scss'

import FullScreenMessage from '@components/shared/FullScreenMessage'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8888/wedding2')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading === false) return <FullScreenMessage type="loading" />
  if (error) return <FullScreenMessage type="error" />
  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
