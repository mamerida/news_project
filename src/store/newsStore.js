import { create } from 'zustand'

export const useNewsStore = create((set) => ({
  news: [],
  selectedNew: {},
  setNews: (otherNews) => set(() => ({ news:otherNews})),
  setSelectedNews: (otherNews) => set(() => ({ selectedNew:otherNews})),
  clearSelectedNew: () => set(() => ({ selectedNew:{}})),
}))