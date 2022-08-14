---
layout: Post
title: 使用Intersection Observer製作sticky menu
subtitle: 在性能上比scroll listener還要好的Intersection Observer
author: alan
date: 2022-07-03
headerImage: /img/language-logo/javascript.jpg
useHeaderImage: true
headerMask: rgba(40, 57, 101, .6)
tags:
  - javascript
---


## 什麼是Intersection Observer ?

Intersection Observer API 提供了一種異步檢測目標元素與祖先元素或視口相交情況變化的方法。簡單來說的就是指定的目標出現在觀察器（window）中時，就傳一個 true 來告知。

那哪時候會用到相交情況變化的檢測呢 ?

- 圖片緩加載——當圖片滾動到可見時才進行加載
- 無限滾動內容——也就是直接滾動到用戶感知翻閱內容底部時加載更多，而無需用戶操作頁，給一個網頁可以無限滾動的錯覺
- 檢測廣告的曝光情況——為了計算廣告，需要知道廣告的曝光情況
- 在用戶看見區域時執行任務或播放動畫

今天要做的則是利用Intersection Observer來做Sticky Menu的效果！

## Intersection Observer的大致架構
```js
// 響鈴條件：設定和控制在哪些情況下，呼叫 callback 函式
let options = {}

// 條件達成做什麼：符合設定條件下，目標進入或離開 viewport 時觸發此 callback 函式
let callback = (entries, observer) => {
  // entries 能拿到所有目標元素進出(intersect)變化的資訊
  entries.forEach(entry => {
    // 取得每個 entry 資訊做一些處理或工作
  })
}

// 製作鈴鐺：建立一個 intersection observer，帶入相關設定資訊
let observer = new IntersectionObserver(callback, options)

// 設定觀察對象：告訴 observer 要觀察哪個目標元素
observer.observe(TARGET_ELEMENT)
```

## 實作Sticky Menu

<CodeGroup>
<CodeGroupItem title="HTML" active>

```html
<div class="banner">BANNER</div>
<div class="container">
    <div class="menu">MENU</div>
    <div class="content">CONTENT</div>
</div>
```

</CodeGroupItem>

<CodeGroupItem title="CSS">

```css
.banner {
    background-color: #333;
    padding: 200px;
}
.container {
    position: relative;
}
.menu {
    background-color: #666;
    padding: 40px 0;
}
.content {
    background-color: #999;
    padding: 40px 0;
    height: 2000px;
}
.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.fixed + .content{
    /*padding-top主要是讓Menu變成Fixed的時候，下方的content不要有突然往上卡的感覺*/
    /*138.4px = 原content的padding:40px + menu的高度98.4px*/
    padding-top:138.4px; 
}
/*menu-position-notifier 是一個從menu向上長，直到 viewport 上邊的一個元素*/
.menu-position-notifier {
    height: 100%;
    position:absolute;
    transform: translateY(-100%);
    top: 0;
    left: 0;
    right: 0;
}
```

</CodeGroupItem>
<CodeGroupItem title="JS">

```js
const menu = document.querySelector('.menu');
// 建立menuPositionNotifier用來當一個觸發點，當menuPositionNotifier完全離開 viewport
// 就代表menu已經碰到 viewport 上邊，我們就可以將它Fixed在上面了！
const menuPositionNotifier = document.createElement('div');
menuPositionNotifier.classList.add('menu-position-notifier')
menu.parentNode.insertBefore(menuPositionNotifier, menu);

const options = {
    threshold: [0]
};

const callback = (entries, observer) => {
    entries.forEach(entry=> {
        if (entry.isIntersecting) {
            // 只在目標元素進入 viewport 時執行這裡的工作
            menu.classList.remove('fixed')
        } else {
            // 只在目標元素離開 viewport 時執行這裡的工作
            menu.classList.add('fixed')
        }
    })
}
const observer = new IntersectionObserver(callback, options);
observer.observe(menuPositionNotifier);
```

</CodeGroupItem>
</CodeGroup>


::: tip
threshold：設定目標元素的可見度達到多少比例時，觸發 callback 函式。可以帶入單一一個值：「只想在可見度達一個比例時觸發」；也可帶入一個陣列：「想在可見度達多個比例時觸發」
- 預設值為 0：一但目標進入或目標的最後一個 px 離開觀察範圍時就觸發
- 設定為 0.5 ：一但可見度為 50% 時就觸發
- 設定為 [0, 0.25, 0.5, 0.75, 1]：可見度每跳 25% 時就觸發
- 設定為 1：可見度達 100% 或一但往下掉低於 100% 時就觸發

isIntersecting：用來判別目標元素是否進入或離開了 viewport
:::

### CodePen 示例

<iframe height="400" style="width: 100%;" scrolling="no" title="IntersectionObserver" src="https://codepen.io/alan-zl/embed/jOzPKZR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/jOzPKZR">
  IntersectionObserver</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

最後有關Scroll listener 和 Intersection Observers性能比較的話，可以參考 [這篇文章](https://itnext.io/1v1-scroll-listener-vs-intersection-observers-469a26ab9eb6)。

## 參考
###### [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)
###### [Let's Write](https://www.letswrite.tw/intersection-oserver-basic/)
###### [麥克的半路出家筆記](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c)
###### [stack overflow](https://stackoverflow.com/questions/57253460/sticky-header-implementation-with-intersectionobserver)
###### [ITNEXT](https://itnext.io/1v1-scroll-listener-vs-intersection-observers-469a26ab9eb6)