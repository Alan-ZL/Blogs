export const siteData = {
  "base": "/Blogs/",
  "lang": "en-US",
  "title": "無與倫筆",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/1651584912.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
