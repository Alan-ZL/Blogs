<template><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> Flex</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*外容器屬性*/</span>
<span class="token property">display</span> <span class="token punctuation">:</span> flex | inline-flex
<span class="token property">flex-direction</span> <span class="token punctuation">:</span> row | row-reverse | column | column-reverse
<span class="token property">flex-wrap</span> <span class="token punctuation">:</span> nowrap | wrap | wrap-reverse
<span class="token property">justify-content</span> <span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around
<span class="token property">align-items</span> <span class="token punctuation">:</span> flex-start | flex-end | center | stretch | baseline
<span class="token property">align-content</span> <span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch

<span class="token comment">/*內元件屬性*/</span>
<span class="token property">align-self</span> <span class="token punctuation">:</span> flex-start | flex-end | center | stretch | baseline
<span class="token property">flex</span> <span class="token punctuation">:</span> flex-grow | flex-shrink | flex-basis
<span class="token property">order</span> <span class="token punctuation">:</span> ex.1<span class="token punctuation">,</span>2<span class="token punctuation">,</span>3<span class="token punctuation">,</span>4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="外容器屬性" tabindex="-1"><a class="header-anchor" href="#外容器屬性" aria-hidden="true">#</a> 外容器屬性</h3>
<h4 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h4>
<p>必須要宣告display為flex才能使用，inline-flex的作用類似於inline-block + flex。</p>
<h4 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h4>
<p>用來改變排版走向(主軸方向)。有分成 row(橫向) 、 row-reverse(橫向反轉) 、 column(直向) 、 column-reverse(直向反轉) 四個屬性。</p>
<h4 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h4>
<p>決定子元素超出範圍時，是否要換行。有分成 nowrap(不換行) 、 wrap(換行) 、 wrap-reverse(換行反轉) 三個屬性。</p>
<h4 id="flex-flow-補充" tabindex="-1"><a class="header-anchor" href="#flex-flow-補充" aria-hidden="true">#</a> flex-flow(補充)</h4>
<p>flex-flow為 [ flex-direction ] 和 [ flex-wrap ] 的縮寫，只要在前後填入相對應的值就好。ex. flex-flow： row wrap ;</p>
<h4 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h4>
<p>決定主軸的對齊方式。有分成 flex-start(向起始點對齊) 、 flex-end(向終點對齊) 、 center(置中對齊) 、 space-between(對齊起始點和終點，其餘間距平均分配) 、 space-around(所有間距皆平均分配) 五個屬性。</p>
<h4 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h4>
<p>決定次軸(交叉軸)的對齊方式<b>(單行子物件)</b>。有分成 flex-start(向起始點對齊) 、 flex-end(向終點對齊) 、 center(置中對齊) 、 stretch(預設值，將內容元素 撐開/延伸 至次軸起始點與終點) 、 baseline(以所有內容元素的基線作為對齊標準) 五個屬性。</p>
<h4 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h4>
<p>決定次軸(交叉軸)的對齊方式<b>(多行子物件)</b>。有分成 flex-start(向起始點對齊) 、 flex-end(向終點對齊) 、 center(置中對齊) 、 space-between(對齊起始點和終點，其餘間距平均分配) 、 space-around(所有間距皆平均分配) 、 stretch(預設值，將內容元素撐開/延伸) 六個屬性。</p>
<h3 id="內元件屬性" tabindex="-1"><a class="header-anchor" href="#內元件屬性" aria-hidden="true">#</a> 內元件屬性</h3>
<h4 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h4>
<p>align-self的設定與align-items相同，但主要是用來覆寫已經套用align-items的屬性 (也就是用來調整內元件交叉軸的對齊設定)。</p>
<h4 id="flex-1" tabindex="-1"><a class="header-anchor" href="#flex-1" aria-hidden="true">#</a> flex</h4>
<p>flex是縮寫，裡面依序包含三個屬性 [ flex-grow ] 、 [ flex-shrink ] 、 [ flex-basis ] ，如果只設定一個則是 flex-grow。</p>
<ul>
<li>
<p>flex-grow: 元件的伸展性，是一個數值(權重)，當空間分配還有剩餘時的當前元件的伸展性，預設值為 0，設置為 0 則不會縮放。</p>
</li>
<li>
<p>flex-shrink: 元件的收縮性，是一個數值(權重)，當空間分配還不足時的當前元件的收縮性，預設值為 1，設置為 0 則不會縮放。</p>
</li>
<li>
<p>flex-basis: 元件的基準值，可使用不同的單位值。</p>
</li>
</ul>
<h4 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h4>
<p>用來重新定義元件的排列順序，順序會依據數值的大小排列。</p>
<h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*外容器屬性*/</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid | inline-grid | subgrid
<span class="token property">grid-template-columns</span> <span class="token punctuation">:</span>
<span class="token property">grid-template-rows</span> <span class="token punctuation">:</span>
<span class="token property">grid-template-ares</span> <span class="token punctuation">:</span>
<span class="token property">grid-auto-columns</span> <span class="token punctuation">:</span>
<span class="token property">grid-auto-rows</span> <span class="token punctuation">:</span>
<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row | column | row dense | column dense
<span class="token property">grid-gap</span> <span class="token punctuation">:</span> grid-column-gap | grid-row-gap
<span class="token property">justify-items</span> <span class="token punctuation">:</span> start | end | center | stretch
<span class="token property">align-items</span> <span class="token punctuation">:</span> start | end | center | stretch
<span class="token property">place-items</span> <span class="token punctuation">:</span> align-items | justify-items
<span class="token property">justify-content</span> <span class="token punctuation">:</span> start | end | center | stretch | space-between | space-around | space-evenly
<span class="token property">align-content</span> <span class="token punctuation">:</span> start | end | center | stretch | space-between | space-around | space-evenly
<span class="token property">place-content</span> <span class="token punctuation">:</span> align-content | justify-content

<span class="token comment">/*內元件屬性*/</span>
<span class="token property">grid-column</span> <span class="token punctuation">:</span> grid-column-start | grid-column-end
<span class="token property">grid-row</span> <span class="token punctuation">:</span> grid-row-start | grid-row-end
<span class="token property">grid-area</span> <span class="token punctuation">:</span>
<span class="token property">justify-self</span> <span class="token punctuation">:</span> start | end | center | stretch
<span class="token property">align-self</span> <span class="token punctuation">:</span> start | end | center | stretch
<span class="token property">place-self</span> <span class="token punctuation">:</span> align-self | justify-self
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="外容器屬性-1" tabindex="-1"><a class="header-anchor" href="#外容器屬性-1" aria-hidden="true">#</a> 外容器屬性</h3>
<h4 id="display-1" tabindex="-1"><a class="header-anchor" href="#display-1" aria-hidden="true">#</a> display</h4>
<p>必須要宣告display為grid才能使用，inline-flex的作用類似於inline-block + flex； 如果這個元素本身也是個 grid item 時，我們就需要設定subgrid，來告訴瀏覽器 &quot;這個元素的尺寸。</p>
<h4 id="grid-template-columns" tabindex="-1"><a class="header-anchor" href="#grid-template-columns" aria-hidden="true">#</a> grid-template-columns</h4>
<p>定義欄的大小(明式)，也可以幫框線取名。ex.grid-template-columns: [track-size] [track-size] ... | [line-name] [track-size] [line-name] ...</p>
<h4 id="grid-template-rows" tabindex="-1"><a class="header-anchor" href="#grid-template-rows" aria-hidden="true">#</a> grid-template-rows</h4>
<p>定義列的大小(明式)，也可以幫框線取名。ex.grid-template-rows: [track-size] [track-size] ... | [line-name] [track-size] [line-name] ...</p>
<h4 id="grid-template-ares" tabindex="-1"><a class="header-anchor" href="#grid-template-ares" aria-hidden="true">#</a> grid-template-ares</h4>
<p>透過幾組字串的組合來定義空間的位置。</p>
<iframe height="400" style="width: 100%;" scrolling="no" title="gird" src="https://codepen.io/alan-zl/embed/zYRzMGX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/zYRzMGX">
  gird</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>fr為grid單位，幾分之幾的概念。上面寫的grid-template-columns: 20% auto 20%也可寫成 1fr 3fr 1fr。</p>
</div>
<h4 id="grid-auto-columns" tabindex="-1"><a class="header-anchor" href="#grid-auto-columns" aria-hidden="true">#</a> grid-auto-columns</h4>
<p>定義欄的大小(暗式)，可想成自動欄寬；配合 minmax($min, $max) 能夠做到RWD。</p>
<h4 id="grid-auto-rows" tabindex="-1"><a class="header-anchor" href="#grid-auto-rows" aria-hidden="true">#</a> grid-auto-rows</h4>
<p>定義列的大小(暗式)，可想成自動列高；配合 minmax($min, $max) 能夠做到RWD。</p>
<h4 id="grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#grid-auto-flow" aria-hidden="true">#</a> grid-auto-flow</h4>
<p>類似flex的flex-direction，用來控制排版走向。主要分成 row 、 column 、 row dense 、 column dense 四個屬性。</p>
<h4 id="grid-gap" tabindex="-1"><a class="header-anchor" href="#grid-gap" aria-hidden="true">#</a> grid-gap</h4>
<p>grid-gap是縮寫，裡面依序包含兩個屬性 [ grid-row-gap ] 、 [ grid-column-gap ] ，主要用來控制元素間距。</p>
<h4 id="justify-items" tabindex="-1"><a class="header-anchor" href="#justify-items" aria-hidden="true">#</a> justify-items</h4>
<p>設定grid內所有個別 &quot; item &quot; 統一的 &quot; 水平 &quot; 對齊方式，有分成 start 、 end 、 center 、 stretch(預設值，延伸) 四個屬性。</p>
<h4 id="align-items-1" tabindex="-1"><a class="header-anchor" href="#align-items-1" aria-hidden="true">#</a> align-items</h4>
<p>設定grid內所有個別 &quot; item &quot; 統一的 &quot; 垂直 &quot; 對齊方式，有分成 start 、 end 、 center 、 stretch(預設值，延伸) 四個屬性。</p>
<h4 id="place-items-補充" tabindex="-1"><a class="header-anchor" href="#place-items-補充" aria-hidden="true">#</a> place-items(補充)</h4>
<p>place-items是縮寫，裡面依序包含兩個屬性 [ align-items ] 、 [ justify-items ]，如果沒有提供第二個值，則第一個值作為第二個值得默認值。</p>
<h4 id="justify-content-1" tabindex="-1"><a class="header-anchor" href="#justify-content-1" aria-hidden="true">#</a> justify-content</h4>
<p>設定grid內整體 &quot; items &quot; 的 &quot;水平 &quot;對齊方式，有分成 start 、 end 、 center 、 stretch 、 space-between(首尾空間，僅為行列間間距值的一半) 、 space-around(對齊首尾，其餘間距平均分配) 、 space-evenly(首尾空間，同為行列間間距值) 七個屬性。</p>
<h4 id="align-content-1" tabindex="-1"><a class="header-anchor" href="#align-content-1" aria-hidden="true">#</a> align-content</h4>
<p>設定grid內整體 &quot; items &quot; 的 &quot; 垂直 &quot;對齊方式，有分成 start 、 end 、 center 、 stretch 、 space-between(首尾空間，僅為行列間間距值的一半) 、 space-around(對齊首尾，其餘間距平均分配) 、 space-evenly(首尾空間，同為行列間間距值) 七個屬性。</p>
<h4 id="place-content-補充" tabindex="-1"><a class="header-anchor" href="#place-content-補充" aria-hidden="true">#</a> place-content(補充)</h4>
<p>place-content是縮寫，裡面依序包含兩個屬性 [ align-content ] 、 [ justify-content ]，如果沒有提供第二個值，則第一個值作為第二個值得默認值。</p>
<h3 id="內元件屬性-1" tabindex="-1"><a class="header-anchor" href="#內元件屬性-1" aria-hidden="true">#</a> 內元件屬性</h3>
<h4 id="grid-column" tabindex="-1"><a class="header-anchor" href="#grid-column" aria-hidden="true">#</a> grid-column</h4>
<p>grid-column是縮寫，裡面依序包含兩個屬性 [ grid-column-start ] 、 [ grid-column-end ] ，主要用來設定物件所佔column的起點到終點(線)。可填入(number) 、 (name) 、 span (number) 、 span (name) 、 auto。</p>
<h4 id="grid-row" tabindex="-1"><a class="header-anchor" href="#grid-row" aria-hidden="true">#</a> grid-row</h4>
<p>grid-row是縮寫，裡面依序包含兩個屬性 [ grid-row-start ] 、 [ grid-row-end ] ，主要用來設定物件所佔row的起點到終點(線)。可填入(number) 、 (name) 、 span (number) 、 span (name) 、 auto。</p>
<h4 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> grid-area</h4>
<p>用來設定物件所佔的區塊。可以設定name然後透過grid-template-areas來套用，或者直接指定grid-row-start / grid-column-start / grid-row-end / grid-column-end 來定位。</p>
<h4 id="justify-self" tabindex="-1"><a class="header-anchor" href="#justify-self" aria-hidden="true">#</a> justify-self</h4>
<p>justify-self的設定與justify-items相同，但主要是用來覆寫已經套用justify-items的屬性。</p>
<h4 id="align-self-1" tabindex="-1"><a class="header-anchor" href="#align-self-1" aria-hidden="true">#</a> align-self</h4>
<p>align-self的設定與align-items相同，但主要是用來覆寫已經套用align-items的屬性。</p>
<h4 id="place-self" tabindex="-1"><a class="header-anchor" href="#place-self" aria-hidden="true">#</a> place-self</h4>
<p>place-self是縮寫，裡面依序包含兩個屬性 [ align-self ] 、 [ justify-self ]，如果沒有提供第二個值，則第一個值作為第二個值得默認值。</p>
<iframe height="400" style="width: 100%;" scrolling="no" title="grid-remplate2" src="https://codepen.io/alan-zl/embed/MWQozPd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/MWQozPd">
  grid-remplate2</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>使用自動欄寬和列高為1fr，可以直接設定內元件屬性的grid-area來賦予它所占的位置， 他會依據你內元件屬性寫的(最大)格線來自動切割成相對應的等分。</p>
</div>
<h2 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> Float</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> float
<span class="token property">float</span><span class="token punctuation">:</span> left | right | none | inherit
<span class="token property">clear</span><span class="token punctuation">:</span> left | right | both | none | inherit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="display-2" tabindex="-1"><a class="header-anchor" href="#display-2" aria-hidden="true">#</a> display</h4>
<p>必須要宣告display為float才能使用。</p>
<h4 id="float-1" tabindex="-1"><a class="header-anchor" href="#float-1" aria-hidden="true">#</a> float</h4>
<p>指定元素是否可以浮動。有分成 left(靠左) 、 right(靠右) 、 none(不浮動) 、 inherit(繼承) 四個屬性。</p>
<h4 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h4>
<p>指定元素來清除周圍浮動。有分成 left 、 right、 both 、 none 、 inherit 四個屬性。</p>
</template>
