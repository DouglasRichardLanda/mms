import { create } from 'zustand'

export const useNewsStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))