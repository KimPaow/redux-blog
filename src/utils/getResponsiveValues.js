import { config } from '@/theme/stitches.config'

/**
 * @param {string} key style key to apply responsive values to 
 * @param {array || string || number} values values or value to to
 * @returns an object with the key/value pairs mapped to media breakpoints or an empty object
 */
export const getResponsiveValues = ({ key, values, prefix = true }) => {
  if (!values || !key) {
    return {}
  }
  const valuePrefix = prefix ? '$' : ''
  const isArray = Array.isArray(values)
  const responsiveValues = {}
  responsiveValues[key] = isArray ? `${valuePrefix}${values[0]}` : `${valuePrefix}${values}`

  if (!isArray) {
    return responsiveValues
  }

  const { media } = config || {}

  if (!media) {
    console.warn('[getResponsiveValues] could not get media object from stitches. media:', media)
    return {}
  }

  // construct new object from media breakpoints
  const bps = {}
  const bpArray = Object.keys(media)

  for (let i = 0; i < bpArray.length; i++) {
    const currentBp = bpArray[i]
    bps[i + 1] = '@' + currentBp
  }

  // construct a new object for each value
  for (let i = 1; i < values.length; i++) {
    const currentValue = values[i]

    // Skip current bp if value is falsy ( this allows for values like: [1, null, 2] )
    if (!currentValue && currentValue !== 0) {
      continue
    }

    const currentBp = bps[i]
    const styleObject = {}

    styleObject[key] = valuePrefix + currentValue
    responsiveValues[currentBp] = styleObject
  }

  return responsiveValues
}

export default getResponsiveValues
