---
title: css  # title (required)
date: 2020-05-21  # publish date (optional)
author: alan  # author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)
---

## Flex

```css
/*外容器屬性*/
display : flex | inline-flex
flex-direction : row | row-reverse | column | column-reverse
flex-wrap : nowrap | wrap | wrap-reverse
justify-content : flex-start | flex-end | center | space-between | space-around
align-items : flex-start | flex-end | center | stretch | baseline
align-content : flex-start | flex-end | center | space-between | space-around | stretch

/*內元件屬性*/
align-self : flex-start | flex-end | center | stretch | baseline
flex : flex-grow | flex-shrink | flex-basis
order : ex.1,2,3,4
```

### 外容器屬性
#### display
必須要宣告display為flex才能使用，inline-flex的作用類似於inline-block + flex。

#### flex-direction
用來改變排版走向(主軸方向)。有分成 row(橫向) 、 row-reverse(橫向反轉) 、 column(直向) 、 column-reverse(直向反轉) 四個屬性。

#### flex-wrap
決定子元素超出範圍時，是否要換行。有分成 nowrap(不換行) 、 wrap(換行) 、 wrap-reverse(換行反轉) 三個屬性。

#### flex-flow(補充)
flex-flow為 [ flex-direction ] 和 [ flex-wrap ] 的縮寫，只要在前後填入相對應的值就好。ex. flex-flow： row wrap ;

#### justify-content
決定主軸的對齊方式。有分成 flex-start(向起始點對齊) 、 flex-end(向終點對齊) 、 center(置中對齊) 、 space-between(對齊起始點和終點，其餘間距平均分配) 、 space-around(所有間距皆平均分配) 五個屬性。

#### align-items
決定次軸(交叉軸)的對齊方式<b>(單行子物件)</b>。有分成 flex-start(向起始點對齊) 、 flex-end(向終點對齊) 、 center(置中對齊) 、 stretch(預設值，將內容元素 撐開/延伸 至次軸起始點與終點) 、 baseline(以所有內容元素的基線作為對齊標準) 五個屬性。

#### align-content
決定次軸(交叉軸)的對齊方式<b>(多行子物件)</b>。有分成 flex-start(向起始點對齊) 、 flex-end(向終點對齊) 、 center(置中對齊) 、 space-between(對齊起始點和終點，其餘間距平均分配) 、 space-around(所有間距皆平均分配) 、 stretch(預設值，將內容元素撐開/延伸) 六個屬性。

### 內元件屬性

#### align-self
align-self的設定與align-items相同，但主要是用來覆寫已經套用align-items的屬性 (也就是用來調整內元件交叉軸的對齊設定)。

#### flex
flex是縮寫，裡面依序包含三個屬性 [ flex-grow ] 、 [ flex-shrink ] 、 [ flex-basis ] ，如果只設定一個則是 flex-grow。

- flex-grow: 元件的伸展性，是一個數值(權重)，當空間分配還有剩餘時的當前元件的伸展性，預設值為 0，設置為 0 則不會縮放。

- flex-shrink: 元件的收縮性，是一個數值(權重)，當空間分配還不足時的當前元件的收縮性，預設值為 1，設置為 0 則不會縮放。

- flex-basis: 元件的基準值，可使用不同的單位值。

#### order
用來重新定義元件的排列順序，順序會依據數值的大小排列。

## Grid

```css
/*外容器屬性*/
display: grid | inline-grid | subgrid
grid-template-columns :
grid-template-rows :
grid-template-ares :
grid-auto-columns :
grid-auto-rows :
grid-auto-flow: row | column | row dense | column dense
grid-gap : grid-column-gap | grid-row-gap
justify-items : start | end | center | stretch
align-items : start | end | center | stretch
place-items : align-items | justify-items
justify-content : start | end | center | stretch | space-between | space-around | space-evenly
align-content : start | end | center | stretch | space-between | space-around | space-evenly
place-content : align-content | justify-content

/*內元件屬性*/
grid-column : grid-column-start | grid-column-end
grid-row : grid-row-start | grid-row-end
grid-area :
justify-self : start | end | center | stretch
align-self : start | end | center | stretch
place-self : align-self | justify-self
```

### 外容器屬性
#### display
必須要宣告display為grid才能使用，inline-flex的作用類似於inline-block + flex； 如果這個元素本身也是個 grid item 時，我們就需要設定subgrid，來告訴瀏覽器 "這個元素的尺寸。

#### grid-template-columns
定義欄的大小(明式)，也可以幫框線取名。ex.grid-template-columns: [track-size] [track-size] ... | [line-name] [track-size] [line-name] ...

#### grid-template-rows
定義列的大小(明式)，也可以幫框線取名。ex.grid-template-rows: [track-size] [track-size] ... | [line-name] [track-size] [line-name] ...

#### grid-template-ares
透過幾組字串的組合來定義空間的位置。

<iframe height="400" style="width: 100%;" scrolling="no" title="gird" src="https://codepen.io/alan-zl/embed/zYRzMGX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/zYRzMGX">
  gird</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: tip
fr為grid單位，幾分之幾的概念。上面寫的grid-template-columns: 20% auto 20%也可寫成 1fr 3fr 1fr。
:::

#### grid-auto-columns
定義欄的大小(暗式)，可想成自動欄寬；配合 minmax($min, $max) 能夠做到RWD。

#### grid-auto-rows
定義列的大小(暗式)，可想成自動列高；配合 minmax($min, $max) 能夠做到RWD。

#### grid-auto-flow
類似flex的flex-direction，用來控制排版走向。主要分成 row 、 column 、 row dense 、 column dense 四個屬性。

#### grid-gap
grid-gap是縮寫，裡面依序包含兩個屬性 [ grid-row-gap ] 、 [ grid-column-gap ] ，主要用來控制元素間距。

#### justify-items
設定grid內所有個別 " item " 統一的 " 水平 " 對齊方式，有分成 start 、 end 、 center 、 stretch(預設值，延伸) 四個屬性。

#### align-items
設定grid內所有個別 " item " 統一的 " 垂直 " 對齊方式，有分成 start 、 end 、 center 、 stretch(預設值，延伸) 四個屬性。

#### place-items(補充)
place-items是縮寫，裡面依序包含兩個屬性 [ align-items ] 、 [ justify-items ]，如果沒有提供第二個值，則第一個值作為第二個值得默認值。

#### justify-content
設定grid內整體 " items " 的 "水平 "對齊方式，有分成 start 、 end 、 center 、 stretch 、 space-between(首尾空間，僅為行列間間距值的一半) 、 space-around(對齊首尾，其餘間距平均分配) 、 space-evenly(首尾空間，同為行列間間距值) 七個屬性。

#### align-content
設定grid內整體 " items " 的 " 垂直 "對齊方式，有分成 start 、 end 、 center 、 stretch 、 space-between(首尾空間，僅為行列間間距值的一半) 、 space-around(對齊首尾，其餘間距平均分配) 、 space-evenly(首尾空間，同為行列間間距值) 七個屬性。

#### place-content(補充)
place-content是縮寫，裡面依序包含兩個屬性 [ align-content ] 、 [ justify-content ]，如果沒有提供第二個值，則第一個值作為第二個值得默認值。

### 內元件屬性
#### grid-column
grid-column是縮寫，裡面依序包含兩個屬性 [ grid-column-start ] 、 [ grid-column-end ] ，主要用來設定物件所佔column的起點到終點(線)。可填入(number) 、 (name) 、 span (number) 、 span (name) 、 auto。

#### grid-row
grid-row是縮寫，裡面依序包含兩個屬性 [ grid-row-start ] 、 [ grid-row-end ] ，主要用來設定物件所佔row的起點到終點(線)。可填入(number) 、 (name) 、 span (number) 、 span (name) 、 auto。

#### grid-area
用來設定物件所佔的區塊。可以設定name然後透過grid-template-areas來套用，或者直接指定grid-row-start / grid-column-start / grid-row-end / grid-column-end 來定位。

#### justify-self
justify-self的設定與justify-items相同，但主要是用來覆寫已經套用justify-items的屬性。

#### align-self
align-self的設定與align-items相同，但主要是用來覆寫已經套用align-items的屬性。

#### place-self
place-self是縮寫，裡面依序包含兩個屬性 [ align-self ] 、 [ justify-self ]，如果沒有提供第二個值，則第一個值作為第二個值得默認值。

<iframe height="400" style="width: 100%;" scrolling="no" title="grid-remplate2" src="https://codepen.io/alan-zl/embed/MWQozPd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alan-zl/pen/MWQozPd">
  grid-remplate2</a> by Alan (<a href="https://codepen.io/alan-zl">@alan-zl</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: tip
使用自動欄寬和列高為1fr，可以直接設定內元件屬性的grid-area來賦予它所占的位置， 他會依據你內元件屬性寫的(最大)格線來自動切割成相對應的等分。
:::

## Float

```css
display: float
float: left | right | none | inherit
clear: left | right | both | none | inherit
```

#### display
必須要宣告display為float才能使用。

#### float
指定元素是否可以浮動。有分成 left(靠左) 、 right(靠右) 、 none(不浮動) 、 inherit(繼承) 四個屬性。

#### clear
指定元素來清除周圍浮動。有分成 left 、 right、 both 、 none 、 inherit 四個屬性。