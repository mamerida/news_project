import { create } from 'zustand'

export const useIsLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (isLoad) => set((state) => ({ isLoading:isLoad})),
}))