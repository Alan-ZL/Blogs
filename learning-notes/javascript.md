---
title: javascript  # title (required)
date: 2020-07-10  # publish date (optional)
author: alan  # author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)
---

## Observer

::: info
Observer(觀察者模式)提供了一個訂閱模型，其中對象訂閱一個事件並在事件發生時得到通知。這種模式是事件驅動編程的基石，包括 JavaScript。觀察者模式促進了良好的物件導向程式設計(OOP)並促進了鬆散耦合。
:::

### Intersection Observer

```js
/*外容器屬性*/
// 響鈴條件：設定和控制在哪些情況下，呼叫 callback 函式
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

// 條件達成做什麼：符合設定條件下，目標進入或離開 viewport 時觸發此 callback 函式
let callback = (entries, observer) => {
  // entries 能拿到所有目標元素進出(intersect)變化的資訊
  entries.forEach(entry => {
    // 取得每個 entry 資訊做一些處理或工作
    // 每個 entry 都描述了一個觀察到的目標元素的交集變化：
    entry.boundingClientRect
    entry.intersectionRatio // 當前有多少目標元素在根的交叉比率內可見，值介於 0.0 和 1.0 之間。
    entry.intersectionRect 
    entry.isIntersecting // 一個布林值，true表示目標元素與觀察者的根相交。
    entry.rootBounds
    entry.target // 被觀察的目標元素
    entry.time
  });
};

// 製作鈴鐺：建立一個 intersection observer，帶入相關設定資訊
let observer = new IntersectionObserver(callback, options)

// 設定觀察對象：告訴 observer 要觀察哪個目標元素
observer.observe(TARGET_ELEMENT)
```

##### root

元素，檢查目標的可見性。必須是目標元素指定父級元素。如果未指定或者為，null則默認為瀏覽器視窗。

#### rootMargin

根 (root) 元素的外邊距。類似於 CSS 中的 margin。如果有指定 root 參數，則 rootMargin 可以使用百分比來取值。該是用 根節點(root) 和 目標元素(target) 發生交集時候的計算交集的區域範圍。默認值為0

#### threshold

可以是單一的 number 也可以是 number 數組，目標元素(target) 和 根節點(root) 相交程度達到該值的时候 IntersectionObserver 註冊的回調函數將會被執行。如果你只是想要探測當 target 元素的在 root 元素中的可見性超過 50% 的时候，你可以指定該屬性值為 0.5。如果你想要 target 元素在 root 元素的可見程度每多 25% 就執行一次回調，那麼你可以指定一個數组 [0, 0.25, 0.5, 0.75, 1]。默認值是 0 (意味著只要有一個 target 像素出現在 root 元素中，回調函数將會被執行)。該值為 1.0 含意是當 target 完全出現在 root 元素中时候 回調才會被執行。

### Mutation Observer

```js
/*外容器屬性*/
// 設定要觀察的節點
let target = document.querySelector('#some-id');

// 創建一個觀察者實例
let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mutation.type 
        mutation.target // 返回受突變影響的節點
        mutation.addedNodes // 返回添加的節點
        mutation.removedNodes // 返回刪除的節點
        mutation.previousSibling // 返回添加或刪除節點的前一個兄弟節點
        mutation.nextSibling // 返回添加或刪除節點的下一個兄弟節點
        mutation.attributeName
        mutation.attributeNamespace
        mutation.oldValue
    });
});

// 觀察者的配置：
let config = { 
    attributes: true, // 觀察目標節點的子元素（包括文本節點）的添加和刪除
    childList: true, // 觀察目標屬性的突變
    characterData: true, // 觀察目標數據的突變
    subtree: true, // 觀察目標的突變，還要觀察目標的後代
    attributeOldValue: true,  // 記錄突變前的目標屬性值
    characterDataOldValue: true, // 記錄突變前的目標數據
    attributeFilter: true
};

// 設定觀察對象：告訴 observer 要觀察哪個目標元素和其變化
observer.observe(target, config);

// 完成後可停止觀察
observer.disconnect();
```

### Resize Observer

```js
// 設定要觀察的元素
let target = document.querySelector('div');

// 創建一個觀察者實例
let observer = new ResizeObserver(entries => {
    entries.forEach((entry) => {
        console.log(entry); // ResizeObserverEntry 物件
    });
});

// 設定觀察對象：告訴 observer 要觀察哪個目標元素
observer.observe(target);
```

## 參考
###### [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)
###### [MutationObserver](https://developer.mozilla.org/zh-TW/docs/Web/API/MutationObserver)
###### [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)