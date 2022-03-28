import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'
export { getClient } from './sanity.server'

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)

export const filterDataToSingleItem = (data, preview) => {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}
