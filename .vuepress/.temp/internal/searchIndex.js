export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "第一篇文章",
    "subtitle": "A Test Post without The Header Image",
    "headers": [
      {
        "level": 2,
        "title": "Paragraphs",
        "slug": "paragraphs",
        "children": [
          {
            "level": 3,
            "title": "中文",
            "slug": "中文",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "H2 Heading",
        "slug": "h2-heading",
        "children": [
          {
            "level": 3,
            "title": "H3 Heading",
            "slug": "h3-heading",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Code",
        "slug": "code",
        "children": [
          {
            "level": 3,
            "title": "Code Blocks",
            "slug": "code-blocks",
            "children": []
          },
          {
            "level": 3,
            "title": "Code Groups",
            "slug": "code-groups",
            "children": []
          },
          {
            "level": 3,
            "title": "Inline Code",
            "slug": "inline-code",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Table",
        "slug": "table",
        "children": []
      },
      {
        "level": 2,
        "title": "Badges",
        "slug": "badges",
        "children": []
      },
      {
        "level": 2,
        "title": "Charts",
        "slug": "charts",
        "children": [
          {
            "level": 3,
            "title": "Chart.js",
            "slug": "chart-js",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Images",
        "slug": "images",
        "children": []
      },
      {
        "level": 2,
        "title": "Emojis",
        "slug": "emojis",
        "children": []
      },
      {
        "level": 2,
        "title": "Containers",
        "slug": "containers",
        "children": []
      },
      {
        "level": 2,
        "title": "References",
        "slug": "references",
        "children": []
      }
    ],
    "path": "/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Post"
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "404"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  },
  {
    "title": "Tags",
    "headers": [],
    "path": "/tags/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Tags",
    "headers": [],
    "path": "/tags/%E7%AF%84%E4%BE%8B/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/page/1/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
