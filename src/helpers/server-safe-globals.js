const windowShim = {
  location: {},
  pageYOffset: 0,
  matchMedia: function matchMedia() {
    return { matches: true };
  },
  HTMLElement: function HTMLElement() { },
  NodeList: function NodeList() { },
  IntersectionObserver: function IntersectionObserver() { },
  customElements: {
    get: function() { },
    define: function() { },
    whenDefined: function() { },
  },
  requestAnimationFrame: function requestAnimationFrame() { },
  onbeforeunload: function onbeforeunload() { },
  scrollTo: function scrollTo() { },
  navigator: {
    userAgent: {}
  },
};

const documentShim = {
  documentElement: {
    scrollTop: 0,
  },
  createElement: function createElement() {
    return {};
  },
  querySelector: function querySelector() { },
  querySelectorAll: function querySelectorAll() { },
};

const performanceShim = {
  now: function() { },
}

export const isServer = !!(typeof window === "undefined");
export const Window = isServer ? windowShim : window;
export const Document = isServer ? documentShim : window.document;
export const Performance = isServer ? performanceShim : performance;
