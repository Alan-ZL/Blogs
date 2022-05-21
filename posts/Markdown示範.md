---
layout: Post
title: Markdown示範
subtitle: A Test Post without Markdown
author: Alan
date: 2022-05-01
headerImage: /img/language-logo/markdown.png
useHeaderImage: true
headerMask: rgba(40, 57, 101, .6)
tags:
  - Markdown
---

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading


## Code

### Code Blocks

Click the red button on the upper-right corner to make the code block full screen.

```python{8}
import food

class Dragon:
  def __init__(self, happiness):
    self.happiness = happiness
  def code(self):
    """ just code """
    self.happiness -= 60
  def eat(self, n)
    # just eat
    self.happiness += n * food.size

me = Dragon(100)

while True:
  me.code()
  me.eat(10)
```


### Code Groups

<CodeGroup>
<CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress-theme-gungnir@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install -D vuepress-theme-gungnir@next
```

</CodeGroupItem>
</CodeGroup>


### Inline Code

`const a = 1`

## Table

| Name | Info |
|------|------|
| vuepress-theme-gungnir | Gungnir is a blog theme for Vuepress 2. |

## Badges <Badge text="tip" /> <Badge text="warning" type="warning" /> <Badge text="danger" type="danger" /> <Badge text="tip middle" vertical="middle" />


## Charts

### Chart.js

```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "# of Votes",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      "borderColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      "borderWidth": 1
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true,
          "callback": "function(value){ return value + 'k'; }"
        }
      }
    }
  }
}
```


## Images

![Image Example](/img/in-post/2022-5-1/header.jpg)



## Emojis

:smile: :smirk: :racehorse: :wolf:


## Containers

::: link {fa-github-alt} [vuepress-theme-gungnir](https://github.com/Renovamen/vuepress-theme-gungnir)
A blog theme for VuePress 2.
:::

::: link {/img/avatar.jpg} [My Blog](https://alan-zl.github.io/Blogs/)
My blog 🧐, powered by VuePress 2, themed by Gungnir.
:::

::: info
This is an info message.
:::

::: tip
This is a tip message.
:::

::: warning
This is a warning message.
:::

::: danger
This is a dangerous warning message.
:::

::: details Show me the code.
```cpp
cout << "Hello World!" << "\n";
```
:::

::: details Show me the code group.
<CodeGroup>
<CodeGroupItem title="JS" active>

```js
console.log("Hello World!");
```

</CodeGroupItem>

<CodeGroupItem title="PY">

```python
print("Hello World!")
```

</CodeGroupItem>
</CodeGroup>
:::

## References
