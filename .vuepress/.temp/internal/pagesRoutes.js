import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-44d47364","/posts/php%E6%8A%93%E5%8F%96%E7%89%B9%E5%AE%9Adiv%E5%8D%80%E5%A1%8A%E5%8F%8A%E5%9C%96%E7%89%87.html",{"title":"php抓取特定div區塊及圖片"},["/posts/php抓取特定div區塊及圖片.html","/posts/php%E6%8A%93%E5%8F%96%E7%89%B9%E5%AE%9Adiv%E5%8D%80%E5%A1%8A%E5%8F%8A%E5%9C%96%E7%89%87","/posts/php抓取特定div區塊及圖片.md","/posts/php%E6%8A%93%E5%8F%96%E7%89%B9%E5%AE%9Adiv%E5%8D%80%E5%A1%8A%E5%8F%8A%E5%9C%96%E7%89%87.md"]],
  ["v-5a0ff34f","/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.html",{"title":"第一篇文章"},["/posts/第一篇文章.html","/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0","/posts/第一篇文章.md","/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-cd1ad1d8","/tags/php/",{"title":"Tags"},["/tags/php/index.html"]],
  ["v-495c8da5","/tags/%E7%AF%84%E4%BE%8B/",{"title":"Tags"},["/tags/範例/","/tags/%E7%AF%84%E4%BE%8B/index.html"]],
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
