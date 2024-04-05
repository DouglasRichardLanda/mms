import { create } from 'zustand'

export const useNewsStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))

export const useMusicStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))

export const useAlbumStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))