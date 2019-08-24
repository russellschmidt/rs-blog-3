---
path: "/blog/lazy-loader/"
date: "2018-09-21T16:20:11.200Z"
title: "Lazy Loader"
type: "blog"
---

Working with a client with their site on squarespace but lots of custom JavaScript and integration with Jotfroms and Stripe on the backend, I kept running into an asset loading problem. To get an asset to load on squarespace as if they had a file manager (they don't), you need to go through the GUI in a hacky roundabout file loading procedure. 

First you create a dummy page to avoid ruining your site flow. Then, you add text and insert a link on this text. Here you can insert a File, and then upload files, one at a time. The files are stored in the schema `http://www.yoursitehere.xxx/s/yourfilename.jpg` with the image file extension varying based on your image life choices. Knowing this schema, you can now refer to your images without worrying about the metric ton of image processing squarespace does.

However, all images needed to be loaded before the page load completes, and if you have a 4-5 image slideshow as my client did, you are, even with compressed images, loading 200KB-2MB of files on top of your page's heft. 

### Lazy and Loaded

The ol search commenced for a better way, and I stumbled on ![this solution](https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/).

Using the first method, I vastly increased my load times. In case the link ever disappears, here is the idea. We swap out `src` on `img` to `data-src`, use CSS to target `img` and `img[data-src]` separately, and then use plain vanilla JS to loop over all images to change `data-src` to `src`. This a one-time lazy load, and doesn't lazy load over the course of scrolling on infinite scroll or anything that fancy. But it is fanastic and simple for many applications. 

Here's David Walsh's code (more on the ![https://davidwalsh.name/lazyload-image-fade](David Walsh Blog))

CSS
```css
img {
  opacity: 1;
  transition: opacity 0.3s;
}

img[data-src] {
  opacity: 0;
}
```

HTML
```html
<img data-src="somefile.jpg" alt="some file" />
```

JAVASCRIPT
```javascript
[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
```