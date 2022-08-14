module.exports = {
    base: '/Blogs/',
    dest: 'docs',
    title: '無與倫筆',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/1651584912.ico'
        }]
    ],
    theme: "gungnir",
    themeConfig: {
        navbarTitle: "Gungnir", // optional, default: "$ cd /home/"
        navbarTitle: "無與倫筆",
        searchText: "Search",
        themePlugins: {
            search: {
                locales: {
                    "/": {
                        placeholder: "Search..."
                    }
                }
            }
        },
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Tags',
                link: '/tags'
            },
            {
                text: 'Learning Notes',
                link: '/learning-notes/css'
            }
        ],
        personalInfo: {
            // required: nickname, will be showed on home page, mobile sidebar and author info of articles
            name: "Alan",

            // required: avatar, will be showed on home page and mobile sidebar
            avatar: "/img/avatar.jpg",

            // required: a description, will be showed on home page
            description: '一個喜歡貓和交易的工程師',

            // optional: id of social platform, will be showed on home page and mobile sidebar
            sns: {
                github: 'Alan-ZL', // Github
                linkedin: 'zhenglun-jiang', // Linkedin
                facebook: 'Alan.ZL.Jiang ', // Facebook
                email: 'zxcya3@gmail.com', // Email
            }
        },
        homeHeaderImages: [{
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
        postNumPerPage: 20, // optional: maximum number of posts per page, default: 10
        pages: {
            // tags page
            tags: {
                // optional: subtitle of tags page
                subtitle: '',

                // optional: paths to and masks of the tags page cover images
                bgImage: {
                    path: '/img/tags.jpg',
                    mask: 'rgba(40, 57, 101, .3)'
                }
            },
        },
        sidebar: {
            '/learning-notes/': [
                'css',
                'javascript',
                'php'
            ]
        },
        footer: `
              &copy; <a href="https://github.com/Alan-ZL" target="_blank">Alan</a> 2022
              <br>
              Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
              <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
        `

    }

}