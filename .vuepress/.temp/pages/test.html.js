export const data = {
  "key": "v-953546a4",
  "path": "/test.html",
  "title": "php",
  "lang": "en-US",
  "frontmatter": {
    "title": "php",
    "date": "2020-05-08T00:00:00.000Z",
    "author": "alan"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "test",
      "slug": "test",
      "children": [
        {
          "level": 3,
          "title": "test",
          "slug": "test-1",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null
  },
  "readingTime": {
    "minutes": 1,
    "words": 3
  },
  "filePathRelative": "test.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
