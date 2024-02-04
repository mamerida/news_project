import React, { useEffect } from 'react'
import { useNewsStore } from '../../store/newsStore'
import { Header } from '../../components/Header/Header'

export const HomePage = () => {
  const {news,setNews} = useNewsStore()

  return(
    <>
      <Header/>
      <div>HomePage</div>
    </>
  )
}
