<template><h2 id="什麼是intersection-observer" tabindex="-1"><a class="header-anchor" href="#什麼是intersection-observer" aria-hidden="true">#</a> 什麼是Intersection Observer ?</h2>
<p>Intersection Observer API 提供了一種異步檢測目標元素與祖先元素或視口相交情況變化的方法。簡單來說的就是指定的目標出現在觀察器（window）中時，就傳一個 true 來告知。</p>
<p>那哪時候會用到相交情況變化的檢測呢 ?</p>
<ul>
<li>圖片緩加載——當圖片滾動到可見時才進行加載</li>
<li>無限滾動內容——也就是直接滾動到用戶感知翻閱內容底部時加載更多，而無需用戶操作頁，給一個網頁可以無限滾動的錯誤</li>
<li>檢測廣告的曝光情況——為了計算廣告，需要知道廣告的曝光情況</li>
<li>在用戶看見區域時執行任務或播放動畫</li>
</ul>
<p>今天要做的則是利用Intersection Observer來做Sticky Menu的效果！</p>
<h2 id="intersection-observer的大致架構" tabindex="-1"><a class="header-anchor" href="#intersection-observer的大致架構" aria-hidden="true">#</a> Intersection Observer的大致架構</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 響鈴條件：設定和控制在哪些情況下，呼叫 callback 函式</span>
<span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 條件達成做什麼：符合設定條件下，目標進入或離開 viewport 時觸發此 callback 函式</span>
<span class="token keyword">let</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// entries 能拿到所有目標元素進出(intersect)變化的資訊</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 取得每個 entry 資訊做一些處理或工作</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 製作鈴鐺：建立一個 intersection observer，帶入相關設定資訊</span>
<span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span>

<span class="token comment">// 設定觀察對象：告訴 observer 要觀察哪個目標元素</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token constant">TARGET_ELEMENT</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="實作sticky-menu" tabindex="-1"><a class="header-anchor" href="#實作sticky-menu" aria-hidden="true">#</a> 實作Sticky Menu</h2>
<CodeGroup>
<CodeGroupItem title="HTML" active>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>BANNER<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>MENU<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>CONTENT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="CSS">
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.banner</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.menu</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 40px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 40px 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fixed</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fixed + .content</span><span class="token punctuation">{</span>
    <span class="token comment">/*padding-top主要是讓Menu變成Fixed的時候，下方的content不要有突然往上卡的感覺*/</span>
    <span class="token comment">/*138.4px = 原content的padding:40px + menu的高度98.4px*/</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span>138.4px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token comment">/*menu-position-notifier 是一個從menu向上長，直到 viewport 上邊的一個元素*/</span>
<span class="token selector">.menu-position-notifier</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> menu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.menu'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 建立menuPositionNotifier用來當一個觸發點，當menuPositionNotifier完全離開 viewport</span>
<span class="token comment">// 就代表menu已經碰到 viewport 上邊，我們就可以將它Fixed在上面了！</span>
<span class="token keyword">const</span> menuPositionNotifier <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menuPositionNotifier<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'menu-position-notifier'</span><span class="token punctuation">)</span>
menu<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>menuPositionNotifier<span class="token punctuation">,</span> menu<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 只在目標元素進入 viewport 時執行這裡的工作</span>
            menu<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'fixed'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 只在目標元素離開 viewport 時執行這裡的工作</span>
            menu<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'fixed'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>menuPositionNotifier<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>threshold：設定目標元素的可見度達到多少比例時，觸發 callback 函式。可以帶入單一一個值：「只想在可見度達一個比例時觸發」；也可帶入一個陣列：「想在可見度達多個比例時觸發」</p>
<ul>
<li>預設值為 0：一但目標進入或目標的最後一個 px 離開觀察範圍時就觸發</li>
<li>設定為 0.5 ：一但可見度為 50% 時就觸發</li>
<li>設定為 [0, 0.25, 0.5, 0.75, 1]：可見度每跳 25% 時就觸發</li>
<li>設定為 1：可見度達 100% 或一但往下掉低於 100% 時就觸發</li>
</ul>
<p>isIntersecting：用來判別目標元素是否進入或離開了 viewport</p>
</div>
<h2 id="codepen-示例" tabindex="-1"><a class="header-anchor" href="#codepen-示例" aria-hidden="true">#</a> CodePen 示例</h2>
<iframe height="400" style="width: 100%;" scrolling="no" title="IntersectionObserver" src="https://codepen.io/alan-zl/embed/jOzPKZR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/jOzPKZR">
  IntersectionObserver</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<p>最後有關Scroll listener 和 Intersection Observers性能比較的話，可以參考 <a href="https://itnext.io/1v1-scroll-listener-vs-intersection-observers-469a26ab9eb6" target="_blank" rel="noopener noreferrer">這篇文章</a>。</p>
<h2 id="參考" tabindex="-1"><a class="header-anchor" href="#參考" aria-hidden="true">#</a> 參考</h2>
<h6 id="mdn" tabindex="-1"><a class="header-anchor" href="#mdn" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">MDN</a></h6>
<h6 id="let-s-write" tabindex="-1"><a class="header-anchor" href="#let-s-write" aria-hidden="true">#</a> <a href="https://www.letswrite.tw/intersection-oserver-basic/" target="_blank" rel="noopener noreferrer">Let's Write</a></h6>
<h6 id="麥克的半路出家筆記" tabindex="-1"><a class="header-anchor" href="#麥克的半路出家筆記" aria-hidden="true">#</a> <a href="https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c" target="_blank" rel="noopener noreferrer">麥克的半路出家筆記</a></h6>
<h6 id="stack-overflow" tabindex="-1"><a class="header-anchor" href="#stack-overflow" aria-hidden="true">#</a> <a href="https://stackoverflow.com/questions/57253460/sticky-header-implementation-with-intersectionobserver" target="_blank" rel="noopener noreferrer">stack overflow</a></h6>
<h6 id="麥克的半路出家筆記-1" tabindex="-1"><a class="header-anchor" href="#麥克的半路出家筆記-1" aria-hidden="true">#</a> <a href="https://itnext.io/1v1-scroll-listener-vs-intersection-observers-469a26ab9eb6" target="_blank" rel="noopener noreferrer">麥克的半路出家筆記</a></h6>
</template>
