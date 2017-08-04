# Guide to Homework-2.1

This guide reviews some newly introduced core concepts covered in [CodeAcademy Learn Responsive Design ](https://www.codecademy.com/learn/learn-html-css).


### em vs rem

In previous lessons, we've used **em** to size elements in comparison to some other element on the page.  Consider the following code:

```html
<div id="outerbox">
  <div id="innerbox">
    This is the innerbox
  </div>
</div>
```
```css

#outerbox {
  font-size: 12px;
}

#innerbox {
  font-size: 2em;
}
```

By setting *#innerbox* to 2em, we've told it to be twice the size of the parent element, *#outerbox* which is 12px.  Doing the math, the words "This is innerbox" will render as 24 pixels.

Using rem, we get a different result.  

```css

html  {
  font-size: 8px;
}

#outerbox {
  font-size: 12px;
}

#innerbox {
  font-size: 2rem;
}
```

In this case, the words "This is innerbox" will render as 16 pixels.  Using **rem** tells the browser to the size of a given element relative to the document root (the html element), not the parent element (in this case *#outerbox*)

### Media Queries

When building a web page, it's important to create a page that looks good on any device -- laptops, tablets, mobile devices, et cetera.  To help us do that, we use media queries, to create rules that only apply when the width of a browser is a certain size.

For example, imagine by default that we've set all paragraph tags to be 14 pixels in our stylesheet. Adding this bit of code in our stylesheet says to make paragraph text 12 pixels *only* when the browser is smaller than 480 pixels wide.  

```css
@media only screen and (max-width: 480px) {
  p {
    font-size: 12px;
  }
}
```

This bit of code says to make paragraph text 16 pixels *only* when the screen is larger than 481 pixels.

```css
@media only screen and (min-width: 481px) {
  p {
    font-size: 16px;
  }
}
```

And this bit of code says to make paragraph 18 pixels only when the browser is between 1000px and 1200px

```css
@media only screen and (min-width: 1000px) and (max-width: 1200px) {
  p {
    font-size: 18px;
  }
}
```

We can also combine multiple style changes within a single media query, like so:

```css
@media only screen and (min-width: 1000px) and (max-width: 1200px) {
  p {
    font-size: 18px;
    color: #ccc;
  }

  div {
    width: 30%;
  }

}
```

And we can have multiple media queries in a single CSS document:

```css
@media only screen and (min-width: 1000px) and (max-width: 1200px) {
  p {
    font-size: 18px;
    color: #ccc;
  }

  div {
    width: 30%;
  }

}

@media only screen and (max-width: 450px) {
  p {
    font-size: 12px;
  }

}
```

### Breakpoints

It's impractical to design for the hundreds of different device widths, so we typically use somewhat standardized *breakpoints* at which we apply different styles.  There's a lot of debate on what these breakpoints should be.  

Here's what CodeAcademy said:

![code academy breakpoints]( https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/screen-sizes.png)

For the purposes of this class, we're going to use the four breakpoints established in the Bootstrap Web framework.

* Extra small devices, phones (767px and smaller)
*	Small devices, tablets (Between 768px and 991px)
* Medium devices, desktops (Between 992px and 1199px)
* Large devices, desktops (1200px and larger)
