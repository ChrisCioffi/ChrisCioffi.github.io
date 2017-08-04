# Guide to Homework-1.4

This guide reviews some core concepts covered in [CodeAcademy Learn HTML & CSS: Part 1](https://www.codecademy.com/learn/learn-html-css), Section 7 "CSS Positioning" and Section 8 "Images" and Section 9 "HTML Tables".

Additionally, you may find the following reference materials useful:

* [HTML Dog Tag List](http://www.htmldog.com/reference/htmltags/)
* [W3Schools Tag List](http://www.w3schools.com/tags/default.asp)
* [HTML Dog HTML Tutorial](http://www.htmldog.com/guides/html/beginner/)
* [W3Schools HTML Tutorial](http://www.w3schools.com/html/)
* [HTML Dog CSS Reference](http://www.htmldog.com/references/css)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)

### CSS Positioning

We can use CSS Positioning to put elements exactly where we wish on the page.

By default, block-level elements appear on the left side of the page, placed in the order they appear in the structure of our HTML document. The CSS property at work here is called **position** and the default value is **static**.

### Relative Positioning

Relative positioning moves an element *relative* to where it would normally appear in its default *static* positioning.  Consider the following code:

```html
<div id="boxone"></div>
<div id="boxtwo"></div>
```
with the following styles

```css

#boxone {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #ccc;
}

#boxtwo {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #000;
}
```

By default, #boxtwo would appear in a static position, immediately below #boxone.

Adding these two lines of CSS will move #boxtwo down 40 pixels, and to the right 20 pixels, *relative* to where it would normally appear (right below #boxone)

```css

#boxtwo {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #000;
  position: relative;
  top: 40px;
  left: 20px;
}
```

The code says: move it 40 pixels *from the top* and move it 20 pixels *from the left*.

The element still appears in the normal flow of the page, it's just moved from it's default position.

### Absolute positioning

Absolute positioning is more drastic.  It takes an element out of the normal flow of the page and moves it to the same location as its nearest positioned neighbor -- and if there is no other positioned parent element, it moves it to the top of the page.  From there, it can be moved using the *top*, *left*, *right*, and *bottom* properties. Consider the following code

```html
<body>
  <div id="boxone"></div>
  <div id="boxtwo"></div>
  <div id="boxthree"></div>
  <div id="boxfour"></div>
</body>
```
with the following styles

```css

#boxone {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #ccc;
}

#boxtwo {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #aaa;
}

#boxthree {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #bbb;
}

#boxfour {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #ccc;
  position: absolute;
  top: 10px;
}
```
Without the last two lines of the #boxfour css, you'd see four boxes, one after another.  But the **absolute** positioning actually takes #boxfour and push it to the top of the page, overlapping #boxone. From there, we push it down 10 pixels, so the final product would cover the bottom half of #boxone and the top half of #boxtwo.

### Z-Index

In our example above, #boxfour would, by default, overlap #boxone and #boxtwo. We can use **z-index** to change which element appears on top.  Note: z-index doesn't work on static elements.  Elements with a higher z-index will overlap those with a lower one.  To switch it so that #boxfour is beneath #boxone and #boxtwo, we could use the following code:

```css

#boxone {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #ccc;
  position: relative;
  z-index: 2;
}

#boxtwo {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #aaa;
  position: relative;
  z-index: 2;
}

#boxthree {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #bbb;
}

#boxfour {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #ccc;
  position: absolute;
  top: 10px;
  z-index: 1;
}
```

### Fixed positioning

Fixed positioning locks an element in place, so that even when a user scrolls down a page, it stays in the same position.  If you've ever seen a web page menu that stays locked at the top of the page, it uses fixed positioning, like so:

```css

.menu {
  width: 100%;
  height: 20px;
  position: fixed;
}
```

### Float

The *float* property allows us to push elements to the left or right side of the page.  Note: a width must be set for this to work. In the following code, #boxone will be flush against the left of the page and #boxtwo will be flush against the right.

```css

#boxone {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #ccc;
  float: left;
}

#boxtwo {
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #aaa;
  float: right;
}

```

### Clear
The clear property prevents a floated element from going on the left or the right side (or both) of a specified element.

### Adding images

We add images with the `<img>` tag, which includes instructions (folder path or URL) on where to find an image.

`<img src="files/images/bears.png"/>`

We can assign an image or classes to an image, and style it in our CSS file.  Common styling for images include height, width, border, margin and positioning.

By default, images are *inline*, but we can make them behave like divs by adjusting their display to *block*, allowing us to center and position.

The rest of the stuff in the CodeAcademy lesson is too in-depth for beginners, in my opinion.

### Tables

We use tables to hold tabular data.  This is the structure of an example table:

```html
<table>
  <thead>
    <th>Table Head column 1</th>
    <th>Table Head column 2</th>
  </thead>
  <tbody>
    <tr>
      <td>cell 1, row 1</td>
      <td>cell 2, row 1</td>
    </tr>
    <tr>
      <td>cell 1, row 2</td>
      <td>cell 2, row 2</td>
    </tr>
  </tbody>
</table>
```
