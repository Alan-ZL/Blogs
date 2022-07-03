<template><h2 id="什麼是intersection-observer" tabindex="-1"><a class="header-anchor" href="#什麼是intersection-observer" aria-hidden="true">#</a> 什麼是Intersection Observer ?</h2>
<p>Intersection Observer API 提供了一種異步檢測目標元素與祖先元素或視口相交情況變化的方法。簡單來說的就是指定的目標出現在觀察器（window）中時，就傳一個 true 來告知。</p>
<p>那哪時候會用到相交情況變化的檢測呢</p>
<p>圖片懶加載——當圖片滾動到可見時才進行加載
滾動內容無限——也就是直接滾動到用戶感知翻閱內容底部時加載更多，而無需用戶操作頁，給一個網頁可以無限滾動的錯誤
檢測廣告的曝光情況——為了計算廣告，需要知道廣告的曝光情況
在用戶看見區域時執行任務或播放動畫</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">//要註冊的選單只有一個，使用 register_nav_menu</span>
<span class="token keyword">function</span> <span class="token function-definition function">register_menu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//這邊註冊了一個名為Main Menu的選單</span>
    <span class="token function">register_nav_menu</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'main-menu'</span><span class="token punctuation">,</span><span class="token function">__</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Main Menu'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'init'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'register_menu'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//要註冊的選單有兩個以上，使用 register_nav_menus</span>
<span class="token keyword">function</span> <span class="token function-definition function">register_menus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">register_nav_menus</span><span class="token punctuation">(</span><span class="token keyword">array</span><span class="token punctuation">(</span>
        <span class="token string single-quoted-string">'main-menu'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Main Menu'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'footer-menu'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Footer Menu'</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'init'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'register_menus'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>註冊完選單後，就能到 WordPress 管理區域使用 <strong>外觀</strong> -&gt; <strong>選單</strong> -&gt; <strong>選單設定</strong>
，這邊我們可以看到已經成功註冊的 Footer Menu 和 Main Menu。
<img src="/img/in-post/2022-6-5/2022-06-05.png" alt="成功選單圖"></p>
<p>接下來就直接選擇剛剛註冊好的選單，在 <strong>外觀</strong> -&gt; <strong>選單</strong> 中做調整就好了！</p>
<h2 id="如何在網站上顯示新選單" tabindex="-1"><a class="header-anchor" href="#如何在網站上顯示新選單" aria-hidden="true">#</a> 如何在網站上顯示新選單</h2>
<p>只要在你想要讓選單顯示的位置例如：頁首(header.php) 或者 頁尾(footer.php)加上 <strong>wp_nav_menu</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">//這邊假設要在頁首(header.php)加上剛剛所定義的新選單 main-menu</span>
<span class="token function">wp_nav_menu</span><span class="token punctuation">(</span>   
    <span class="token keyword">array</span> <span class="token punctuation">(</span> 
        <span class="token string single-quoted-string">'theme_location'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'main-menu'</span> 
    <span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>使用以上方法客製出的選單可能不會有任何CSS，所以後面就要自己動手加上CSS讓他變成你想要的樣子！</p>
</div>
<h2 id="參考" tabindex="-1"><a class="header-anchor" href="#參考" aria-hidden="true">#</a> 參考</h2>
<h6 id="holly-pryce" tabindex="-1"><a class="header-anchor" href="#holly-pryce" aria-hidden="true">#</a> <a href="https://hollypryce.com/custom-menu-wordpress/" target="_blank" rel="noopener noreferrer">HOLLY PRYCE</a></h6>
</template>
