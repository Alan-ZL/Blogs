---
layout: Post
title: JS實作圖片上傳預覽功能
subtitle: 簡單又實用的圖片預覽方法
author: alan
date: 2022-08-14
headerImage: /img/language-logo/javascript.jpg
useHeaderImage: true
headerMask: rgba(40, 57, 101, .6)
tags:
  - javascript
---

上傳檔案是在網站中還蠻常見的功能，這邊想要跟大家分享兩個上傳圖片取得預覽圖的方法！

::: tip
input 中的 accept 屬性可以用來限制上傳的檔案類型，其中又有分成指定 **副檔名** 或者指定 **網際網路媒體形式** 。

指定 **副檔名**：
- accept=".pdf" (只接受.pdf格式檔案)
- accept=".csv,.xls" (只接受.csv和.xls格式檔案)

指定 **網際網路媒體形式**：
- accept="image/*" (只接受影像圖檔，包含jpg、png、gif等各種圖檔)
- accept="video/*" (只接受影片檔，包含mp4、mpg、avi等)
- accept="audio/*" (只接受聲音檔，包含mp3、wav)
- accept="text/html,.txt" (只接受網頁檔(包含.htm、.html檔)以及.txt檔)
:::

## 方法一 ( FileReader.readAsDataURL )

<CodeGroup>

<CodeGroupItem title="HTML" active>

```html
<form>
  <input accept="image/*" type="file" id="img-input" />
  <img id="img-preview" src="#" alt="input img" />
</form>
```
</CodeGroupItem>

<CodeGroupItem title="JS">

```js
let img = document.querySelector("#img-input");
img.onchange = () =>{
  const [file] = img.files;
  const fr = new FileReader();
  fr.onload = function (e) {
    document.querySelector("#img-preview").src= e.target.result;
  };
  // 使用 readAsDataURL 將圖片轉成 Base64
  fr.readAsDataURL(file);
}
```
</CodeGroupItem>

</CodeGroup>

### CodePen 示例

<iframe height="400" style="width: 100%;" scrolling="no" title="upload img preivew(FileReader)" src="https://codepen.io/alan-zl/embed/poLxwjY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/poLxwjY">
  upload img preivew(FileReader)</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 方法二 ( URL.createObjectUR )

<CodeGroup>

<CodeGroupItem title="HTML" active>

```html
<form>
  <input accept="image/*" type="file" id="img-input" />
  <img id="img-preview" src="#" alt="input img" />
</form>
```
</CodeGroupItem>

<CodeGroupItem title="JS">

```js
let img = document.querySelector("#img-input");
img.onchange = () =>{
  const [file] = img.files;
  if (file) {
    document.querySelector("#img-preview").src = URL.createObjectURL(file);
  }
}
```
</CodeGroupItem>

</CodeGroup>

### CodePen 示例

<iframe height="400" style="width: 100%;" scrolling="no" title="upload img preview" src="https://codepen.io/alan-zl/embed/MWVPmEq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/MWVPmEq">
  upload img preview</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 兩者方法比較

### URL.createObjectURL() vs. FileReader.readAsDataURL()

| | URL.createObjectURL | FileReader.readAsDataURL |
|------|------|------|
| 返回值 | 可以得到當前文件的一個内存URL | 可以得到一段base64的字符串 |
| 內存使用 | 返回值雖然是字符串，但是是一個url地址 | 返回值是轉化後的超長base64字符串(長度與要解析的文件大小正相關)。 |
| 內存清理 | 存在於當前doucment內，清除方式只有unload()事件或revokeObjectURL()手動清除。 | 依照JS垃圾回收機制自動從內存中清理。 |
| 執行機制 | 直接返回，同步執行。 | 通過回調的形式返回，異步執行。 |
| 兼容性 | 兼容IE10以上，其他瀏覽器均支持。| 兼容IE10以上，其他瀏覽器均支持。|
| 其他 | 依次返回無影響。 | 當多個文件同時處理時，需要每一個文件對應一個新的FileReader對象。 |

### 結論

總體來說URL.createObjectURL(file)得到本地內存容器的URL地址，方便預覽，多次使用需要注意手動釋放內存的問題，性能優秀。FileReader.readAsDataURL(file)勝在直接轉為base64格式，可以直接用於業務，無需二次轉換格式。


## 參考
###### [Stackoverflow](https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded)
###### [從入門到放棄](https://exfast.me/2019/04/javascript-preview-image-when-front-end-uploads-image/)
###### [果园园园园园](https://juejin.cn/post/6844903933626810382)