import { useEffect, useRef, useState } from "react"
import { Window as window } from "@/utils/server-safe-globals"

/**
 * useIntersect hook - easily allows setting up intersection observers
 * Accepts the standard config
 * Returns a function to set the node to be observed and intersection data for this node
 */
export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer = useRef(null)

  useEffect(() => {
    observer.current && observer.current.disconnect()

    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      {
        root,
        rootMargin,
        threshold
      }
    )

    const { current: currentObserver } = observer;

    node && currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  return [entry, setNode]
}

export default useIntersect
