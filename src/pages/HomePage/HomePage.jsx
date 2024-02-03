import React, { useEffect } from 'react'
import { useNewsStore } from '../../store/newsStore'

export const HomePage = () => {
  const {news,setNews} = useNewsStore()

  return(
    <>
      <div>HomePage</div>
    </>
  )
}
