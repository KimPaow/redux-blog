import { createRef } from 'react'
import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
    scrollPercentage: createRef(),
    scrollProgress: createRef(),
  }
})

export default useStore
