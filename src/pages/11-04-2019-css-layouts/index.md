---
path: "/css-layouts"
date: "11-04-2019"
title: "Common CSS layouts using flex, grid and position properties."
tags: ['tech','coding']
excerpt: "Get started quickly with the most common use cases of these 3 properties."
---

Hey everyone, let's get started with quick code snippets for the most common uses cases of flex, grid and position.


But before that, what you must remember:

* Flex is used for one dimensional layouts, so think navigation bars and the like.
* Grid is, as the name suggests, to plan out a grid layout. Anything to do with 2 dimensional layouts, like Cards (think, product cards on Amazon).
* Position, for this tutorial, will be used to position one element with respect to another. Let's dive into the code!

<br/><br/>


![CSS layout](/css-layout-demo-2.png)
*The layout we'll be attempting to build.*

### Making the navbar using Flex

In your `html`, write:

```
 <!--nav-->
 <ul>
    <li class="brand">Logo</li>
    <li>Home</li>
    <li>About</li>
    <li>Team</li>
</ul>
```

And in your `css`:

```
ul {
    display: flex;
    justify-content: center;
    align-items: center;
    background: aqua;
    height: 50px;
    margin-bottom: 20px;
}

.brand {
    margin-right: auto;
    font-size: 30px;    
}

ul li {
    color: black;
    list-style-type: none;
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
}
```

What you should know: 

* the `display: flex` property is ALWAYS set on the parent container (in this case, the `ul`). `justify-content` and `align-items` are flex-only properties. 
* `justify-content` moves all the `li` items towards the center of the parent element. `align-items` vertically aligns them in the parent element.
* To get the logo pushed all the way to the left side, I've used `margin-right: auto` to give it as much of a right margin as possible. 

### Arranging the card layouts using CSS Grid

In your `html`:
```
<div class="grid">
    <div class="card">
        1
    </div>
    <div class="card">
        2
    </div>
    <div class="card">
        3
    </div>
</div>
```

In your `css`:
```
/* Grid */
.grid {
    display: grid;
    grid-gap: 10px;
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.card {
    margin: 0 auto;
    background-color: aquamarine;
    width: 400px;
    height: 400px;
}
```

What you should know:

* Again, `display: grid` is set on the parent element, in this case, the `div` with class `grid`.
* `grid-gap` is a property that ensures consistent spacing between your grid items.
* `grid-template-columns` is the magic property. It's specifying how you want to layout your grid items. Here's a
great [link](https://rachelandrew.co.uk/archives/2016/04/12/flexible-sized-grids-with-auto-fill-and-minmax/) explaining the method I've used
above further.
* Responsive (mobile-first) design is important. You can re-size the screen to check if the columns wrap down one below the other. This is
also something grid offers out of the box.


### The position property

The most common use case of the `position` property is to have full control over where you want *one single element* to be.

In this case, we'll ensure the text "That's all folks" is centered within the purple background.

In your `html`:
```
<div class="banner">
        <p class="banner-inner">Hello there, folks.</p>
</div>
```

In your `css`:

```
/* Position */
.banner {
    color: white;
    background: rebeccapurple;
    height: 300px;
    position: relative;
}

.banner p {
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
```

What you should know:

* `position: relative` is set on the parent element, assuming you want to move around the child element *within* the parent element.
In this case, change the position of the paragraph within the big purple background.
* `position: absolute` is set on the child element. This gives you full freedom to move the child element around within the parent.
* Think of `top` and `left` as specifying x and y co-ordinates, and the origin is the top left corner of the purple background. Play around with these
numbers, and you'll figure out what is going on.
* `transform: translate(-50%,-50%)` is required because you want the **center of the element** to line up with the center of its parent.

<br/>

I emphasize using these properties because they ensure *responsive design* (fancy term for: mobile-friendly design).

And that's it! These are the 3 properties I find myself most using most often to figure out the layout of a website. You'll be pleased to know
that most modern CSS frameworks are built on top of flex and grid.
