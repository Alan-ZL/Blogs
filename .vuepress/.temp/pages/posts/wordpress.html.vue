<template><h2 id="如何在-wordpress-中註冊新選單" tabindex="-1"><a class="header-anchor" href="#如何在-wordpress-中註冊新選單" aria-hidden="true">#</a> 如何在 WordPress 中註冊新選單</h2>
<p>首先，需要在WordPress主題中的funciton.php文件中註冊新選單！</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>註冊完選單後，接下來就可以直接到 WordPress 管理區域使用 <strong>外觀</strong> -&gt; <strong>選單</strong> 來添加項目到新的選單囉
<img src="/img/in-post/2022-5-1/header.jpg" alt="Image Example"></p>
<h2 id="如何將項目添加到新的-wordpress-選單" tabindex="-1"><a class="header-anchor" href="#如何將項目添加到新的-wordpress-選單" aria-hidden="true">#</a> 如何將項目添加到新的 WordPress 選單</h2>
<h2 id="參考" tabindex="-1"><a class="header-anchor" href="#參考" aria-hidden="true">#</a> 參考</h2>
<h6 id="holly-pryce" tabindex="-1"><a class="header-anchor" href="#holly-pryce" aria-hidden="true">#</a> <a href="https://hollypryce.com/custom-menu-wordpress/" target="_blank" rel="noopener noreferrer">HOLLY PRYCE</a></h6>
</template>
