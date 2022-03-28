import { useEffect } from 'react';
import { useProgress as useLoadingProgress } from '@react-three/drei';
import { emitEvent, useEvent, evt } from '@/utils/events';

export const useProgress = () => {
  const { progress } = useLoadingProgress()

  // When Dom mounts, check if there is a canvas and emit loaded event
  useEvent(evt.DOMMounted, () => {
    const nocanvas = document.querySelector('[data-nocanvas]')

    if (nocanvas) {
      emitEvent(evt.canvasLoaded, true)
    } else {
      emitEvent(evt.progress, progress)
      if (progress === 100) {
        emitEvent(evt.canvasLoaded, true)
      }
    }
  })

  // When the component mounts, emit DOMMounted event
  useEffect(() => {
    emitEvent(evt.DOMMounted)
  }, [])

  // When progress of the loader changes, emit progress event, then finally emit canvasLoaded event
  useEffect(() => {
    emitEvent(evt.progress, progress)
    if (progress === 100) {
      emitEvent(evt.canvasLoaded, true)
    }
  }, [progress])

  return progress || 100
}
