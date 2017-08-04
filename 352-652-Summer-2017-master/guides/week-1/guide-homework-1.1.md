# Guide to Homework-1.1

This guide reviews some core concepts covered in [CodeAcademy Learn HTML & CSS: Part 1](https://www.codecademy.com/learn/learn-html-css), Section 1 "HTML Fundamentals" and Section 2 "HTML Content".

Additionally, you may find the following reference materials useful:

* [HTML Dog Tag List](http://www.htmldog.com/reference/htmltags/)
* [W3Schools Tag List](http://www.w3schools.com/tags/default.asp)
* [HTML Dog HTML Tutorial](http://www.htmldog.com/guides/html/beginner/)
* [W3Schools HTML Tutorial](http://www.w3schools.com/html/)

## HTML structure

HTML works through "tags", which are denoted by angle brackets < >.  Here's an example: `<p>`, which is a paragraph tag, and tells the browser to interpret the text wrapped in it as "paragraph" text.

In almost all cases, HTML works by putting an open tag (like `</p>`) at the beginning, and ends with a companion closing tag (like `<p>`). There are exceptions, like image tags (`<img>`) or break tags `<br>` which are "self-closing."  

All HTML web pages have the same basic structure under the hood:

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
  </body>
</html>
```

Let's break that down:

* The first line `<!DOCTYPE html>` tells the browser this page will use HTML.
* The `<html>` and `</html>` tell the browser that everything between is HTML.
* The `<head>` and `</head>` is the head section, which contains information that helps make the page work behind the scenes -- but not content shown on the page.
* The `<body` and `</body>` contains the actual content of the page that will be shown.

Here are some common tags:

* `<h1>` through `<h6>` are header tags.  They contain default styling information that make them useful as display text.
* `<p>` is a paragraph tag.  It is typically used for paragraph text.
* Unordered lists, like the one you see here, use two different kinds of tags together. The `<ul>` tag says, "get ready for an unordered list", while the `<li>` tag is used for each list item.
```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

* Ordered lists work the same way, but use numbers or letters instead of bullets. And they start with an `<ol>` tag.
* To hyperlink a word, it's a little more complicated.  Use an `<a>` tag, wrapped around the word(s) you want to link, and indicate where you want the link to go: `<a href="http://google.com">This goes to Google</a>`.  If you want it to open in a new window, add this bit of code: `<a href="http://google.com" target="_blank">This goes to Google</a>`

Indentation is very important in writing clean code that is easy to read and debug.  Always indent by two spaces any tag nested within another tag.  As in, do this:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

Not this:

```html
<ul>
<li>List item 1</li>
<li>List item 2</li>
</ul>
```   
