module.exports = {
    base: '/Blogs/',
    theme: "gungnir",
    themeConfig: {
        navbarTitle: "Gungnir", // optional, default: "$ cd /home/"
        navbarTitle: "無與倫筆",
        searchText: "Search",
        navbar: [
            // NavbarItem
            {
                text: 'Home',
                link: '/',
            },
            {
                text: '類別',
                link: '/tags'
            },
            // NavbarGroup
            {
                text: '作品集',
                children: ['作品', '作品'],
            },
            // string - page file path
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
                linkedin: 'xiaohan-zou-55bba0160', // Linkedin
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
                    path: '/img/pages/tags.jpg',
                    mask: 'rgba(40, 57, 101, 1)'
                }
            },

            // links page
            links: {
                // optional: subtitle of links page
                subtitle: 'Hey! Here is links page!',

                // optional: paths to and masks of the links page cover images
                bgImage: {
                    path: '/img/pages/links.jpg',
                    mask: 'rgba(64, 118, 190, 0.5)'
                }
            }
        },
        footer: `
              &copy; <a href="https://github.com/Alan-ZL" target="_blank">Alan</a> 2022
              <br>
              Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
              <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
        `

    }

}