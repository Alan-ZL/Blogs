export const themeData = {
  "navbarTitle": "無與倫筆",
  "searchText": "Search",
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "類別",
      "link": "/tags"
    },
    {
      "text": "作品集",
      "children": [
        "作品",
        "作品"
      ]
    }
  ],
  "personalInfo": {
    "name": "Alan",
    "avatar": "/img/avatar.jpg",
    "description": "一個喜歡貓和交易的工程師",
    "sns": {
      "github": "Alan-ZL",
      "linkedin": "xiaohan-zou-55bba0160",
      "facebook": "Alan.ZL.Jiang ",
      "email": "zxcya3@gmail.com"
    }
  },
  "homeHeaderImages": [
    {
      "path": "/img/home-bg/cat.jpeg",
      "mask": "rgba(40, 57, 101, .3)"
    },
    {
      "path": "/img/home-bg/trade.webp",
      "mask": "rgb(40, 57, 101, .3)"
    },
    {
      "path": "/img/home-bg/software.webp",
      "mask": "rgb(40, 57, 101, .3)"
    }
  ],
  "postNumPerPage": 20,
  "pages": {
    "tags": {
      "subtitle": "",
      "bgImage": {
        "path": "/img/pages/tags.jpg",
        "mask": "rgba(40, 57, 101, 1)"
      }
    },
    "links": {
      "subtitle": "Hey! Here is links page!",
      "bgImage": {
        "path": "/img/pages/links.jpg",
        "mask": "rgba(64, 118, 190, 0.5)"
      }
    }
  },
  "footer": "\n              &copy; <a href=\"https://github.com/Alan-ZL\" target=\"_blank\">Alan</a> 2022\n              <br>\n              Powered by <a href=\"https://v2.vuepress.vuejs.org\" target=\"_blank\">VuePress</a> &\n              <a href=\"https://github.com/Renovamen/vuepress-theme-gungnir\" target=\"_blank\">Gungnir</a>\n        ",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "hitokoto": false,
  "catalog": true,
  "searchIcon": "ri-search-2-line",
  "langIcon": "hi-translate",
  "repo": null,
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": false,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page on GitHub",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "info": "INFO",
  "tip": "TIP",
  "warning": "WARNING",
  "danger": "DANGER",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "$ cd /home/",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar",
  "pageText": {
    "tags": "Tags",
    "links": "Links"
  },
  "showAllTagsText": "Show All",
  "postNext": "Next",
  "postPrev": "Previous",
  "homeNext": "← Newer Posts",
  "homePrev": "Older Posts →",
  "pwaPopupMessage": "New content is available.",
  "pwaPopupButtonText": "Refresh",
  "headerImageCredit": "Image by",
  "search": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
