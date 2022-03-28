import { useRef, useEffect } from 'react'
import EventEmitter from 'eventemitter3'
import PropTypes from 'prop-types'

const eventEmitter = new EventEmitter()

// vanilla
const onEvent = (eventName, handler, options) => {
  let context = null
  const { once } = options
  if (once) {
    context = eventEmitter.once(eventName, handler)
  } else {
    context = eventEmitter.on(eventName, handler)
  }
  return context
}

onEvent.propTypes = {
  eventName: PropTypes.string,
  handler: PropTypes.any,
  options: PropTypes.shape({
    once: PropTypes.bool,
    context: PropTypes.any
  })
}

// vanilla
const offEvent = (eventName, handler, options) => {
  const { once, context } = options
  eventEmitter.removeListener(eventName, handler, context || null, once ? true : false)
}

offEvent.propTypes = {
  eventName: PropTypes.string,
  handler: PropTypes.any,
  options: PropTypes.shape({
    once: PropTypes.bool,
    context: PropTypes.any
  })
}

// react hook that listens to events
// takes an event and a handler, will run handler each time event is fired
const useEvent = (eventName, handler, deps = [], options = {}) => {
  const savedHandler = useRef(null)
  const { once } = options

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    let context = null
    const eventListener = (event) => savedHandler.current(event)
    if (once) {
      context = eventEmitter.once(eventName, eventListener)
    } else {
      context = eventEmitter.on(eventName, eventListener)
    }
    return () => {
      eventEmitter.removeListener(eventName, eventListener, context, once ? true : false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName, once, ...deps])
}

useEvent.propTypes = {
  eventName: PropTypes.string,
  handler: PropTypes.any,
  deps: PropTypes.array,
  options: PropTypes.shape({
    once: PropTypes.bool,
    context: PropTypes.any
  })
}

const emitEvent = (eventName, payload) => {
  eventEmitter.emit(eventName, payload)
}

emitEvent.propTypes = {
  eventName: PropTypes.string,
  payload: PropTypes.any,
}

const evt = {
  progress: 'progress',
  canvasLoaded: 'canvasloaded',
  navigationRequested: 'navigationrequested',
  navigationCompleted: 'navigationcompleted',
  loaderResetComplete: 'loaderresetcomplete',
  DOMMounted: 'dommounted',
  loaderFinished: 'loaderfinished'
}

export { emitEvent, useEvent, onEvent, offEvent, evt }
