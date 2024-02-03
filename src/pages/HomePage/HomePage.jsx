import React from 'react'
import { useNewsStore } from '../../store/newsStore'

export const HomePage = () => {
  const news = useNewsStore((state) => state.news)

  return(
    <>
      <div>HomePage</div>
      <div>{news.length}</div>
    </>
  )
}
