---
layout: Post
title: php抓取特定div區塊及圖片
subtitle: 想抓取其他網站的內容，但又不想用iframe的好方法！
author: alan
date: 2022-05-08
headerImage: /img/language-logo/phplogo.jpg
useHeaderImage: true
headerMask: rgba(40, 57, 101, .6)
tags:
  - php
---

在做公司網站時，有遇到想要把a網站的內容在b網站上顯示，本來我以前都是用iframe來處理，但有時候想要抓取的並不是整個頁面，使用iframe就比較不符合需求，所以嘗試改成使用php來抓取b網站上的特定內容！

## 取得指定網頁內的所有圖片

```php
//取得指定位址的內容，並儲存至text
$text=file_get_contents('https://alan-zl.github.io/Blogs/');

//取得所有img標籤，並儲存至二維陣列match
preg_match_all('#<img[^>]*>#i', $text, $match);

//印出match
print_r($match);
```

## 取得指定網頁內的第一張圖片

```php
//取得指定位址的內容，並儲存至text
$text=file_get_contents('https://alan-zl.github.io/Blogs/');

//取得第一個img標籤，並儲存至陣列match（regex語法與上述同義）
preg_match('/<img[^>]*>/Ui', $text, $match);

//印出match
print_r($match);
```

## 取得指定網頁內的特定div區塊（藉由id判斷）

```php
//取得指定位址的內容，並儲存至text
$text=file_get_contents('https://alan-zl.github.io/Blogs/');

//去除換行及空白字元（序列化內容才需使用）
$text=str_replace(array("\r","\n","\t","\s"), '', $text);  

//取出div標籤且id為PostContent的內容，並儲存至陣列match
preg_match('/<div[^>]*id="PostContent"[^>]*>(.*?) <\/div>/si',$text,$match);

//印出match[0]
print($match[0]);
```

## 結合

```php
//取得指定位址的內容，並儲存至text
$text=file_get_contents('https://alan-zl.github.io/Blogs/');   

//取出div標籤且id為PostContent的內容，並儲存至陣列match
preg_match('/<div[^>]*id="PostContent"[^>]*>(.*?) <\/div>/si',$text,$match);  

//取得第一個img標籤，並儲存至陣列match2
preg_match('/<img[^>]*>/Ui', $match[0], $match2);

//印出match2[0]
print_r($match2[0]);
```

## 參考
###### [King的幸福國度](https://kingjoy1235.pixnet.net/blog/post/28598212)