import { create } from 'zustand'

export const useIsLoadingStore = create((set) => ({
  isLoading: true,
  setIsLoading: (isLoad) => set((state) => ({ isLoading:isLoad})),
}))