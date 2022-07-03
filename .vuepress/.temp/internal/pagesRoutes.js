import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-0e0543ba","/learning-notes/css.html",{"title":"css"},["/learning-notes/css","/learning-notes/css.md"]],
  ["v-2a13dc08","/learning-notes/javascript.html",{"title":"javascript"},["/learning-notes/javascript","/learning-notes/javascript.md"]],
  ["v-09717565","/learning-notes/php.html",{"title":"php"},["/learning-notes/php","/learning-notes/php.md"]],
  ["v-4660312c","/posts/Markdown%E7%A4%BA%E7%AF%84.html",{"title":"Markdown示範"},["/posts/Markdown示範.html","/posts/Markdown%E7%A4%BA%E7%AF%84","/posts/Markdown示範.md","/posts/Markdown%E7%A4%BA%E7%AF%84.md"]],
  ["v-44d47364","/posts/php%E6%8A%93%E5%8F%96%E7%89%B9%E5%AE%9Adiv%E5%8D%80%E5%A1%8A%E5%8F%8A%E5%9C%96%E7%89%87.html",{"title":"PHP抓取特定div區塊及圖片"},["/posts/php抓取特定div區塊及圖片.html","/posts/php%E6%8A%93%E5%8F%96%E7%89%B9%E5%AE%9Adiv%E5%8D%80%E5%A1%8A%E5%8F%8A%E5%9C%96%E7%89%87","/posts/php抓取特定div區塊及圖片.md","/posts/php%E6%8A%93%E5%8F%96%E7%89%B9%E5%AE%9Adiv%E5%8D%80%E5%A1%8A%E5%8F%8A%E5%9C%96%E7%89%87.md"]],
  ["v-3501c675","/posts/wordpress%E8%A3%BD%E4%BD%9C%E5%AE%A2%E8%A3%BD%E9%81%B8%E5%96%AE.html",{"title":"WordPress製作客製選單"},["/posts/wordpress製作客製選單.html","/posts/wordpress%E8%A3%BD%E4%BD%9C%E5%AE%A2%E8%A3%BD%E9%81%B8%E5%96%AE","/posts/wordpress製作客製選單.md","/posts/wordpress%E8%A3%BD%E4%BD%9C%E5%AE%A2%E8%A3%BD%E9%81%B8%E5%96%AE.md"]],
  ["v-98960ca8","/posts/%E4%BD%BF%E7%94%A8IntersectionObserver%E8%A3%BD%E4%BD%9CstickyMenu.html",{"title":"使用Intersection Observer製作sticky menu"},["/posts/使用IntersectionObserver製作stickyMenu.html","/posts/%E4%BD%BF%E7%94%A8IntersectionObserver%E8%A3%BD%E4%BD%9CstickyMenu","/posts/使用IntersectionObserver製作stickyMenu.md","/posts/%E4%BD%BF%E7%94%A8IntersectionObserver%E8%A3%BD%E4%BD%9CstickyMenu.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-0515f9c3","/tags/Markdown/",{"title":"Tags"},["/tags/Markdown/index.html"]],
  ["v-cd1ad1d8","/tags/php/",{"title":"Tags"},["/tags/php/index.html"]],
  ["v-6fc49b73","/tags/wordpress/",{"title":"Tags"},["/tags/wordpress/index.html"]],
  ["v-3c686865","/tags/javascript/",{"title":"Tags"},["/tags/javascript/index.html"]],
  ["v-3a1f8885","/page/1/",{"title":"Home"},["/page/1/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
