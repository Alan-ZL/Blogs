import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-5a0ff34f","/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.html",{"title":"第一篇文章"},["/posts/第一篇文章.html","/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0","/posts/第一篇文章.md","/posts/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
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
