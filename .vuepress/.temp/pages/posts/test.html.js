export const data = {
  "key": "v-2be07832",
  "path": "/posts/test.html",
  "title": "測",
  "lang": "en-US",
  "frontmatter": {
    "layout": "Post",
    "title": "測",
    "subtitle": "A Test Post without The Header Image",
    "author": "Alan",
    "date": "2022-5-1",
    "headerImage": "/img/in-post/2022-5-1/header.jpg",
    "tags": [
      "test"
    ]
  },
  "excerpt": "<p>Welcome to VuePress theme Gungnir.</p>\n",
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
  "git": {},
  "readingTime": {
    "minutes": 4,
    "words": 824
  },
  "filePathRelative": "posts/test.md"
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
