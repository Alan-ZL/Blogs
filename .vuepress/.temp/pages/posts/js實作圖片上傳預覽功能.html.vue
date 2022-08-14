<template><p>上傳檔案是在網站中還蠻常見的功能，這邊想要跟大家分享兩個上傳圖片取得預覽圖的方法！</p>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>input 中的 accept 屬性可以用來限制上傳的檔案類型，其中又有分成指定 <strong>副檔名</strong> 或者指定 <strong>網際網路媒體形式</strong> 。</p>
<p>指定 <strong>副檔名</strong>：</p>
<ul>
<li>accept=&quot;.pdf&quot; (只接受.pdf格式檔案)</li>
<li>accept=&quot;.csv,.xls&quot; (只接受.csv和.xls格式檔案)</li>
</ul>
<p>指定 <strong>網際網路媒體形式</strong>：</p>
<ul>
<li>accept=&quot;image/*&quot; (只接受影像圖檔，包含jpg、png、gif等各種圖檔)</li>
<li>accept=&quot;video/*&quot; (只接受影片檔，包含mp4、mpg、avi等)</li>
<li>accept=&quot;audio/*&quot; (只接受聲音檔，包含mp3、wav)</li>
<li>accept=&quot;text/html,.txt&quot; (只接受網頁檔(包含.htm、.html檔)以及.txt檔)</li>
</ul>
</div>
<h2 id="方法一-filereader-readasdataurl" tabindex="-1"><a class="header-anchor" href="#方法一-filereader-readasdataurl" aria-hidden="true">#</a> 方法一 ( FileReader.readAsDataURL )</h2>
<CodeGroup>
<CodeGroupItem title="HTML" active>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-preview<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#img-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token operator">=</span> img<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
  <span class="token keyword">const</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#img-preview"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src<span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用 readAsDataURL 將圖片轉成 Base64</span>
  fr<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="codepen-示例" tabindex="-1"><a class="header-anchor" href="#codepen-示例" aria-hidden="true">#</a> CodePen 示例</h3>
<iframe height="400" style="width: 100%;" scrolling="no" title="upload img preivew(FileReader)" src="https://codepen.io/alan-zl/embed/poLxwjY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/poLxwjY">
  upload img preivew(FileReader)</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<h2 id="方法二-url-createobjectur" tabindex="-1"><a class="header-anchor" href="#方法二-url-createobjectur" aria-hidden="true">#</a> 方法二 ( URL.createObjectUR )</h2>
<CodeGroup>
<CodeGroupItem title="HTML" active>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-input<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-preview<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="JS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#img-input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token operator">=</span> img<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#img-preview"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="codepen-示例-1" tabindex="-1"><a class="header-anchor" href="#codepen-示例-1" aria-hidden="true">#</a> CodePen 示例</h3>
<iframe height="400" style="width: 100%;" scrolling="no" title="upload img preview" src="https://codepen.io/alan-zl/embed/MWVPmEq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/MWVPmEq">
  upload img preview</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<h2 id="兩者方法比較" tabindex="-1"><a class="header-anchor" href="#兩者方法比較" aria-hidden="true">#</a> 兩者方法比較</h2>
<h3 id="url-createobjecturl-vs-filereader-readasdataurl" tabindex="-1"><a class="header-anchor" href="#url-createobjecturl-vs-filereader-readasdataurl" aria-hidden="true">#</a> URL.createObjectURL() vs. FileReader.readAsDataURL()</h3>
<table>
<thead>
<tr>
<th></th>
<th>URL.createObjectURL</th>
<th>FileReader.readAsDataURL</th>
</tr>
</thead>
<tbody>
<tr>
<td>返回值</td>
<td>可以得到當前文件的一個内存URL</td>
<td>可以得到一段base64的字符串</td>
</tr>
<tr>
<td>內存使用</td>
<td>返回值雖然是字符串，但是是一個url地址</td>
<td>返回值是轉化後的超長base64字符串(長度與要解析的文件大小正相關)。</td>
</tr>
<tr>
<td>內存清理</td>
<td>存在於當前doucment內，清除方式只有unload()事件或revokeObjectURL()手動清除。</td>
<td>依照JS垃圾回收機制自動從內存中清理。</td>
</tr>
<tr>
<td>執行機制</td>
<td>直接返回，同步執行。</td>
<td>通過回調的形式返回，異步執行。</td>
</tr>
<tr>
<td>兼容性</td>
<td>兼容IE10以上，其他瀏覽器均支持。</td>
<td>兼容IE10以上，其他瀏覽器均支持。</td>
</tr>
<tr>
<td>其他</td>
<td>依次返回無影響。</td>
<td>當多個文件同時處理時，需要每一個文件對應一個新的FileReader對象。</td>
</tr>
</tbody>
</table>
<h3 id="結論" tabindex="-1"><a class="header-anchor" href="#結論" aria-hidden="true">#</a> 結論</h3>
<p>總體來說URL.createObjectURL(file)得到本地內存容器的URL地址，方便預覽，多次使用需要注意手動釋放內存的問題，性能優秀。FileReader.readAsDataURL(file)勝在直接轉為base64格式，可以直接用於業務，無需二次轉換格式。</p>
<h2 id="參考" tabindex="-1"><a class="header-anchor" href="#參考" aria-hidden="true">#</a> 參考</h2>
<h6 id="stackoverflow" tabindex="-1"><a class="header-anchor" href="#stackoverflow" aria-hidden="true">#</a> <a href="https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded" target="_blank" rel="noopener noreferrer">Stackoverflow</a></h6>
<h6 id="從入門到放棄" tabindex="-1"><a class="header-anchor" href="#從入門到放棄" aria-hidden="true">#</a> <a href="https://exfast.me/2019/04/javascript-preview-image-when-front-end-uploads-image/" target="_blank" rel="noopener noreferrer">從入門到放棄</a></h6>
<h6 id="果园园园园园" tabindex="-1"><a class="header-anchor" href="#果园园园园园" aria-hidden="true">#</a> <a href="https://juejin.cn/post/6844903933626810382" target="_blank" rel="noopener noreferrer">果园园园园园</a></h6>
</template>
