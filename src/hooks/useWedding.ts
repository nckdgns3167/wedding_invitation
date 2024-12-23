import { getWedding } from '@api/wedding'
import { Wedding } from '@models/wedding'
import { useQuery } from 'react-query'

const useWedding = () => {
  const { data, isLoading, error } = useQuery<Wedding>(
    ['wedding'],
    () =>
      getWedding().then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      }),
    { suspense: true },
  )

  return {
    data,
    isLoading,
    error,
  }
}

export default useWedding
