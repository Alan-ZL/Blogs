<template><p>動機，可以說是最單純的力量。世界需要改革，需要對Markdown有新的認知。</p>
<p>做好Markdown這件事，可以說已經成為了全民運動。愛獻生曾經說過，身體是我們從物質世界獲取一切援助和力量的導管。想必各位已經看出了其中的端倪。Markdown絕對是史無前例的。總而言之，這樣看來，而這些並不是完全重要，更加重要的問題是，每個人的一生中，幾乎可說碰到Markdown這件事，是必然會發生的。阿拉伯曾說過，獅子再溫馴，也不要把手放在它嘴。這不禁令我重新仔細的思考。一般來說，透過逆向歸納，得以用最佳的策略去分析Markdown。胡錦濤曾說過，對外開放的國策不能變。但中國人也要避免在未來的中國經濟中成為跑龍套的。要做到這一點，就需要國人支持本土企業，提高自主發展能力。韓國人“”這句話很好嘛，這種精神值得中國人學習。這句話幾乎解讀出了問題的根本。</p>
<h2 id="h2-heading" tabindex="-1"><a class="header-anchor" href="#h2-heading" aria-hidden="true">#</a> H2 Heading</h2>
<h3 id="h3-heading" tabindex="-1"><a class="header-anchor" href="#h3-heading" aria-hidden="true">#</a> H3 Heading</h3>
<h4 id="h4-heading" tabindex="-1"><a class="header-anchor" href="#h4-heading" aria-hidden="true">#</a> H4 Heading</h4>
<h5 id="h5-heading" tabindex="-1"><a class="header-anchor" href="#h5-heading" aria-hidden="true">#</a> H5 Heading</h5>
<h6 id="h6-heading" tabindex="-1"><a class="header-anchor" href="#h6-heading" aria-hidden="true">#</a> H6 Heading</h6>
<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>
<h3 id="code-blocks" tabindex="-1"><a class="header-anchor" href="#code-blocks" aria-hidden="true">#</a> Code Blocks</h3>
<p>Click the red button on the upper-right corner to make the code block full screen.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> food

<span class="token keyword">class</span> <span class="token class-name">Dragon</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> happiness<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>happiness <span class="token operator">=</span> happiness
  <span class="token keyword">def</span> <span class="token function">code</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">""" just code """</span>
    self<span class="token punctuation">.</span>happiness <span class="token operator">-=</span> <span class="token number">60</span>
  <span class="token keyword">def</span> <span class="token function">eat</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
    <span class="token comment"># just eat</span>
    self<span class="token punctuation">.</span>happiness <span class="token operator">+=</span> n <span class="token operator">*</span> food<span class="token punctuation">.</span>size

me <span class="token operator">=</span> Dragon<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
  me<span class="token punctuation">.</span>code<span class="token punctuation">(</span><span class="token punctuation">)</span>
  me<span class="token punctuation">.</span>eat<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="code-groups" tabindex="-1"><a class="header-anchor" href="#code-groups" aria-hidden="true">#</a> Code Groups</h3>
<CodeGroup>
<CodeGroupItem title="YARN" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-theme-gungnir@next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -D vuepress-theme-gungnir@next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="inline-code" tabindex="-1"><a class="header-anchor" href="#inline-code" aria-hidden="true">#</a> Inline Code</h3>
<p><code>const a = 1</code></p>
<h2 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Info</th>
</tr>
</thead>
<tbody>
<tr>
<td>vuepress-theme-gungnir</td>
<td>Gungnir is a blog theme for Vuepress 2.</td>
</tr>
</tbody>
</table>
<h2 id="badges" tabindex="-1"><a class="header-anchor" href="#badges" aria-hidden="true">#</a> Badges <Badge text="tip" /> <Badge text="warning" type="warning" /> <Badge text="danger" type="danger" /> <Badge text="tip middle" vertical="middle" /></h2>
<h2 id="charts" tabindex="-1"><a class="header-anchor" href="#charts" aria-hidden="true">#</a> Charts</h2>
<h3 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js" aria-hidden="true">#</a> Chart.js</h3>
<div class="language-chart ext-chart line-numbers-mode"><pre v-pre class="language-chart"><code>{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;Red&quot;, &quot;Blue&quot;, &quot;Yellow&quot;, &quot;Green&quot;, &quot;Purple&quot;, &quot;Orange&quot;],
    &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;# of Votes&quot;,
      &quot;data&quot;: [12, 19, 3, 5, 2, 3],
      &quot;backgroundColor&quot;: [
        &quot;rgba(255, 99, 132, 0.2)&quot;,
        &quot;rgba(54, 162, 235, 0.2)&quot;,
        &quot;rgba(255, 206, 86, 0.2)&quot;,
        &quot;rgba(75, 192, 192, 0.2)&quot;,
        &quot;rgba(153, 102, 255, 0.2)&quot;,
        &quot;rgba(255, 159, 64, 0.2)&quot;
      ],
      &quot;borderColor&quot;: [
        &quot;rgba(255, 99, 132, 1)&quot;,
        &quot;rgba(54, 162, 235, 1)&quot;,
        &quot;rgba(255, 206, 86, 1)&quot;,
        &quot;rgba(75, 192, 192, 1)&quot;,
        &quot;rgba(153, 102, 255, 1)&quot;,
        &quot;rgba(255, 159, 64, 1)&quot;
      ],
      &quot;borderWidth&quot;: 1
    }]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true,
          &quot;callback&quot;: &quot;function(value){ return value + 'k'; }&quot;
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2>
<p><img src="/img/in-post/2022-5-1/header.jpg" alt="Image Example"></p>
<h2 id="emojis" tabindex="-1"><a class="header-anchor" href="#emojis" aria-hidden="true">#</a> Emojis</h2>
<p>😄 😏 🐎 🐺</p>
<h2 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h2>

      <LinkCard
        title="vuepress-theme-gungnir"
        link="https://github.com/Renovamen/vuepress-theme-gungnir"
        icon="fa-github-alt"
        image=""
        siteDomain="true"
        ><p>A blog theme for VuePress 2.</p>
</LinkCard>

      <LinkCard
        title="My Blog"
        link="https://zxh.io"
        icon=""
        image="/img/links/me.png"
        siteDomain="true"
        ><p>My blog 🧐, powered by VuePress 2, themed by Gungnir.</p>
</LinkCard>
<div class="custom-container info"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg><p class="custom-container-title">INFO</p>
<p>This is an info message.</p>
</div>
<div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg><p class="custom-container-title">TIP</p>
<p>This is a tip message.</p>
</div>
<div class="custom-container warning"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg><p class="custom-container-title">WARNING</p>
<p>This is a warning message.</p>
</div>
<div class="custom-container danger"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.64 123.31C133.55 123.31 0 256.83 0 420.94c0 164.11 133.55 297.64 297.64 297.64 164.09 0 297.64-133.52 297.64-297.64 0-164.12-133.55-297.63-297.64-297.63Zm107.8 333.25H189.83c-19.541 0-35.62-16.079-35.62-35.62 0-19.541 16.079-35.62 35.62-35.62h215.61c19.541 0 35.62 16.079 35.62 35.62 0 19.541-16.079 35.62-35.62 35.62Z" style="fill:#f55;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.179)"/></svg><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning message.</p>
</div>
<details class="custom-container details"><summary>Show me the code.</summary>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello World!"</span> <span class="token operator">&lt;&lt;</span> <span class="token string">"\n"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<details class="custom-container details"><summary>Show me the code group.</summary>
<CodeGroup>
<CodeGroupItem title="JS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="PY">
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
</template>
