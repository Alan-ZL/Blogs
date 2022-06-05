---
layout: Post
title: WordPress製作客製選單
subtitle: 您使用的wordpress主題預設選單不夠用？卻不知道如何製作自己的選單！?
author: alan
date: 2022-06-05
headerImage: /img/language-logo/wordpress.jpg
useHeaderImage: true
headerMask: rgba(40, 57, 101, .6)
tags:
  - wordpress
---


## 如何在 WordPress 中註冊新選單

首先，需要在WordPress主題中的funciton.php文件中註冊新選單！

```php
//要註冊的選單只有一個，使用 register_nav_menu
function register_menu(){
    //這邊註冊了一個名為Main Menu的選單
    register_nav_menu('main-menu',__('Main Menu')); 
}
add_action('init', 'register_menu');

//要註冊的選單有兩個以上，使用 register_nav_menus
function register_menus(){
    register_nav_menus(array(
        'main-menu' => 'Main Menu',
        'footer-menu' => 'Footer Menu'
    ));
}
add_action('init', 'register_menus');
```

註冊完選單後，就能到 WordPress 管理區域使用 **外觀** -> **選單** -> **選單設定** 
，這邊我們可以看到已經成功註冊的 Footer Menu 和 Main Menu。
![成功選單圖](/img/in-post/2022-6-5/2022-06-05.png)

接下來就直接選擇剛剛註冊好的選單，在 **外觀** -> **選單** 中做調整就好了！

## 如何在網站上顯示新選單

只要在你想要讓選單顯示的位置例如：頁首(header.php) 或者 頁尾(footer.php)加上 **wp_nav_menu**

```php
//這邊假設要在頁首(header.php)加上剛剛所定義的新選單 main-menu
wp_nav_menu(   
    array ( 
        'theme_location' => 'main-menu' 
    ) 
);
```

::: tip
使用以上方法客製出的選單可能不會有任何CSS，所以後面就要自己動手加上CSS讓他變成你想要的樣子！
:::

## 參考
###### [HOLLY PRYCE](https://hollypryce.com/custom-menu-wordpress/)