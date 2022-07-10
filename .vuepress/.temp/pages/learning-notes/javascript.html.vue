<template><h2 id="observer" tabindex="-1"><a class="header-anchor" href="#observer" aria-hidden="true">#</a> Observer</h2>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<p>Observer(觀察者模式)提供了一個訂閱模型，其中對象訂閱一個事件並在事件發生時得到通知。這種模式是事件驅動編程的基石，包括 JavaScript。觀察者模式促進了良好的物件導向程式設計(OOP)並促進了鬆散耦合。</p>
</div>
<h3 id="intersection-observer" tabindex="-1"><a class="header-anchor" href="#intersection-observer" aria-hidden="true">#</a> Intersection Observer</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*外容器屬性*/</span>
<span class="token comment">// 響鈴條件：設定和控制在哪些情況下，呼叫 callback 函式</span>
<span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#scrollArea'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">'0px'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span>
<span class="token punctuation">}</span>

<span class="token comment">// 條件達成做什麼：符合設定條件下，目標進入或離開 viewport 時觸發此 callback 函式</span>
<span class="token keyword">let</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// entries 能拿到所有目標元素進出(intersect)變化的資訊</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 取得每個 entry 資訊做一些處理或工作</span>
    <span class="token comment">// 每個 entry 都描述了一個觀察到的目標元素的交集變化：</span>
    entry<span class="token punctuation">.</span>boundingClientRect
    entry<span class="token punctuation">.</span>intersectionRatio <span class="token comment">// 當前有多少目標元素在根的交叉比率內可見，值介於 0.0 和 1.0 之間。</span>
    entry<span class="token punctuation">.</span>intersectionRect 
    entry<span class="token punctuation">.</span>isIntersecting <span class="token comment">// 一個布林值，true表示目標元素與觀察者的根相交。</span>
    entry<span class="token punctuation">.</span>rootBounds
    entry<span class="token punctuation">.</span>target <span class="token comment">// 被觀察的目標元素</span>
    entry<span class="token punctuation">.</span>time
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 製作鈴鐺：建立一個 intersection observer，帶入相關設定資訊</span>
<span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span>

<span class="token comment">// 設定觀察對象：告訴 observer 要觀察哪個目標元素</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token constant">TARGET_ELEMENT</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h5 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h5>
<p>元素，檢查目標的可見性。必須是目標元素指定父級元素。如果未指定或者為，null則默認為瀏覽器視窗。</p>
<h4 id="rootmargin" tabindex="-1"><a class="header-anchor" href="#rootmargin" aria-hidden="true">#</a> rootMargin</h4>
<p>根 (root) 元素的外邊距。類似於 CSS 中的 margin。如果有指定 root 參數，則 rootMargin 可以使用百分比來取值。該是用 根節點(root) 和 目標元素(target) 發生交集時候的計算交集的區域範圍。默認值為0</p>
<h4 id="threshold" tabindex="-1"><a class="header-anchor" href="#threshold" aria-hidden="true">#</a> threshold</h4>
<p>可以是單一的 number 也可以是 number 數組，目標元素(target) 和 根節點(root) 相交程度達到該值的时候 IntersectionObserver 註冊的回調函數將會被執行。如果你只是想要探測當 target 元素的在 root 元素中的可見性超過 50% 的时候，你可以指定該屬性值為 0.5。如果你想要 target 元素在 root 元素的可見程度每多 25% 就執行一次回調，那麼你可以指定一個數组 [0, 0.25, 0.5, 0.75, 1]。默認值是 0 (意味著只要有一個 target 像素出現在 root 元素中，回調函数將會被執行)。該值為 1.0 含意是當 target 完全出現在 root 元素中时候 回調才會被執行。</p>
<h3 id="mutation-observer" tabindex="-1"><a class="header-anchor" href="#mutation-observer" aria-hidden="true">#</a> Mutation Observer</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*外容器屬性*/</span>
<span class="token comment">// 設定要觀察的節點</span>
<span class="token keyword">let</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#some-id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 創建一個觀察者實例</span>
<span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mutations</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mutations<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mutation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mutation<span class="token punctuation">.</span>type 
        mutation<span class="token punctuation">.</span>target <span class="token comment">// 返回受突變影響的節點</span>
        mutation<span class="token punctuation">.</span>addedNodes <span class="token comment">// 返回添加的節點</span>
        mutation<span class="token punctuation">.</span>removedNodes <span class="token comment">// 返回刪除的節點</span>
        mutation<span class="token punctuation">.</span>previousSibling <span class="token comment">// 返回添加或刪除節點的前一個兄弟節點</span>
        mutation<span class="token punctuation">.</span>nextSibling <span class="token comment">// 返回添加或刪除節點的下一個兄弟節點</span>
        mutation<span class="token punctuation">.</span>attributeName
        mutation<span class="token punctuation">.</span>attributeNamespace
        mutation<span class="token punctuation">.</span>oldValue
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 觀察者的配置：</span>
<span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 觀察目標節點的子元素（包括文本節點）的添加和刪除</span>
    <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 觀察目標屬性的突變</span>
    <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 觀察目標數據的突變</span>
    <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 觀察目標的突變，還要觀察目標的後代</span>
    <span class="token literal-property property">attributeOldValue</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 記錄突變前的目標屬性值</span>
    <span class="token literal-property property">characterDataOldValue</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 記錄突變前的目標數據</span>
    <span class="token literal-property property">attributeFilter</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 設定觀察對象：告訴 observer 要觀察哪個目標元素和其變化</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 完成後可停止觀察</span>
observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="resize-observer" tabindex="-1"><a class="header-anchor" href="#resize-observer" aria-hidden="true">#</a> Resize Observer</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 設定要觀察的元素</span>
<span class="token keyword">let</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 創建一個觀察者實例</span>
<span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResizeObserver</span><span class="token punctuation">(</span><span class="token parameter">entries</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ResizeObserverEntry 物件</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 設定觀察對象：告訴 observer 要觀察哪個目標元素</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="參考" tabindex="-1"><a class="header-anchor" href="#參考" aria-hidden="true">#</a> 參考</h2>
<h6 id="intersectionobserver" tabindex="-1"><a class="header-anchor" href="#intersectionobserver" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">IntersectionObserver</a></h6>
<h6 id="mutationobserver" tabindex="-1"><a class="header-anchor" href="#mutationobserver" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-TW/docs/Web/API/MutationObserver" target="_blank" rel="noopener noreferrer">MutationObserver</a></h6>
<h6 id="resizeobserver" tabindex="-1"><a class="header-anchor" href="#resizeobserver" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API" target="_blank" rel="noopener noreferrer">ResizeObserver</a></h6>
</template>
