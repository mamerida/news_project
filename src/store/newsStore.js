import { create } from 'zustand'

export const useNewsStore = create((set) => ({
  news: [],
  setNews: (otherNews) => set(() => ({ news:otherNews})),
}))