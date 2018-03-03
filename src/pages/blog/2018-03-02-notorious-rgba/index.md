---
path: "/blog/notorious-rgba/"
date: "2018-03-02T16:20:11.200Z"
title: "Notorious RGBA"
type: "blog"
---

In playing with opacity and colors, I find I enjoy `rgba()` and use it quite a bit. However,
I often have the hex value which means I have to do something annoying like convert hexadecimal
to RGB. This came up recently as I was exploring the free icons in [Simple Icons](http://www.simpleicons.com)

This site was useful for simple, fast hex-to-rgb conversions <http://hex2rgba.devoth.com/> but that
workflow kind of sucked, especially as I was experimenting and switching out colors. It was this
three step polka between 2 websites and my code and then my dev site window. Thank goodness
Gatsby in all its glory does a live update. Seriously, try [Gatsby](https://www.gatsbyjs.org/). It's so money.

Then the happiest accident happened. I was copy-pasting my 100th hex value into the site but
the active window was an open RGBA...

`background: rgba(#fc8c8c, 0.8)`

... **and that does not work**.

lol.

Anyway there is a [draft spec](https://drafts.csswg.org/css-color/) for an 8 digit hex-based RGBA that would look like `#ff12a3cc` with the trailing cc being a hex representation of opacity. I would think 256 levels of opacity is more than sufficient for the web and if you need 10 significant digits in your opacity specification you can use rgba.

Then, finally, no more converting hex to rgb since I literally only use hex for the rgba.

<iframe src="https://giphy.com/embed/msKNSs8rmJ5m" width="480" height="357" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/day-subreddit-msKNSs8rmJ5m">via GIPHY</a></p>
