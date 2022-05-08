export const data = {
  "key": "v-511aad03",
  "path": "/learning-notes/test.html",
  "title": "css",
  "lang": "en-US",
  "frontmatter": {
    "title": "css",
    "date": "2020-05-08T00:00:00.000Z",
    "author": "alan"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "test(h2)",
      "slug": "test-h2",
      "children": [
        {
          "level": 3,
          "title": "test(h3)",
          "slug": "test-h3",
          "children": []
        },
        {
          "level": 3,
          "title": "test(h3)",
          "slug": "test-h3-1",
          "children": []
        },
        {
          "level": 3,
          "title": "test(h3)",
          "slug": "test-h3-2",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null
  },
  "readingTime": {
    "minutes": 4,
    "words": 909
  },
  "filePathRelative": "learning-notes/test.md"
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
