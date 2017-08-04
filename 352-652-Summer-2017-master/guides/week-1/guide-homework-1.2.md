# Guide to Homework-1.2

This guide reviews some core concepts covered in [CodeAcademy Learn HTML & CSS: Part 1](https://www.codecademy.com/learn/learn-html-css), Section 3 "CSS Fundamentals" and Section 4 "Styling with CSS".

Additionally, you may find the following reference materials useful:

* [HTML Dog Tag List](http://www.htmldog.com/reference/htmltags/)
* [W3Schools Tag List](http://www.w3schools.com/tags/default.asp)
* [HTML Dog HTML Tutorial](http://www.htmldog.com/guides/html/beginner/)
* [W3Schools HTML Tutorial](http://www.w3schools.com/html/)
* [HTML Dog CSS Reference](http://www.htmldog.com/references/css)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)

### CSS Structure

When building web pages, we generally keep the structure of the page in one file (the HTML, .html) and styling information in a second file (the Stylesheet, .css).  These are both text files, but they contain different kinds of information.

To connect the two files, we put a line of code within the `<head></head>` tag of the HTML page we want to style, giving directions where to find the stylesheet:

```html
<link href="style.css" type="text/css" rel="stylesheet">
```

or, let's say the stylesheet is in a folder called "styling", then our code would look like this:  

```html
<link href="styling/style.css" type="text/css" rel="stylesheet">
```

The code we write in our stylesheet looks different than HTML, but it's designed to work together. Here's an example, which tells the browser to make all text within `<h1>` tags have a font size of 24 pixels.

```css
h1 {
  font-size: 24px;
}
```

In the above example, the *h1* is called a "selector". Inside of the two curly brackets, the *font-size* is called a "property", and a colon separates it from the *42px*, which is called the value. The line ends with a semi-colon.  There are hundreds of properties that affect styling.

Our aim is always to write as little code as possible.  So if two different elements on a page are supposed to have the same styling (or some of the same styling), we can put them together in our stylesheet.  This bit of code tells the browser to make all text in `<h1>` and `<p>` tags 12 pixels.  

```css
h1, p {
  font-size: 24px;
}
```

We can apply the same styling to every element on the page using a wild-card selector, like so:

```css
* {
  font-size: 24px;
}
```

When writing CSS code, neatness is important.  This is what your code should look like, in terms of spacing.

```css
h2 {
  font-size: 12px;
}

p {
  font-size: 6px;
}
```

Comments help keep your code readable, without breaking it.  The format for comments is different than html. This is an HTML comment.


<!-this is an html comment-->


And this is a CSS comment:
```css
/*This is a CSS comment*/
```

### CSS Colors

There are many different ways of changing colors on web pages.  We use different CSS properties and values in different formats.

To change the text color of all the `<h1>` tags on a page green, we could do this, using one of the 147 named colors CSS recognizes.

```css
h1 {
  color: Green;
}
```

Or we can turn it the same color, using a Hexidecimal or Hex Code:

```css
h1 {
  color: #008000;
}
```

Or we can use another format, RGB (which stands for Red, Green Blue), and turn it the exact same color:
```css

h1 {
  color: rgb(0,128,0);
}
```

Using RGB and Hex Codes, you can make 16.8 million different colors! Here are two color-scheme choosers I like for finding colors

* [Coolors](https://coolors.co/)
* [Adobe Color Wheel](https://color.adobe.com/create/color-wheel/)

To change the color of the background of the invisible box each line of text is contained in, you can also use named colors, Hex or RGB.  But the property is different, like so.

```css
h1 {
  background-color: #008000;
}
```

### CSS Fonts

We can also change the font used for text, with the font-family property:

```css
h1 {
  font-family: Arial;
}
```
If the font we want to has a two (or more) word name, we put it in quotes, like so:

```css
h1 {
  font-family: "Book Antiqua";
}
```

Unfortunately, not every computer in the world has the same fonts installed.  Some are more common than others. So, we plan ahead using fallback fonts, like so:

```css
h1 {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
}
```

This bit of code tells the user's browser to make all `<h1>` text Helvetica Neue, and if the computer doesn't have that, then use Helvetica.  No Helvetica, either? Then use Arial, and, if Arial is missing, use any generic sans-serif font.  

[CSS Font Stack](http://www.cssfontstack.com/) is a great resource for selecting a common, web safe font, and finding a similar fallback.

To make sure the user sees the exact font you want them to use, you can add a line of code in the head tag of your HTML document to one of the hundreds of fonts on [Google Fonts](https://fonts.google.com/), like so:

```html
<!--Remember, the link to your Google Font goes in your .html file, NOT CSS-->
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
```

Now, we can call the Roboto font like so (we still use a generic sans-serif fallback font, in the unlikely event of Google's server not working):

```css
h1 {
  font-family: 'Roboto',sans-serif;
}
```

### CSS Font Size

There are several different ways of changing font sizes.

We can set the exact number of pixels for each element:

```css
h1 {
  font-size: 18px;
}
```

Or we can use percentages or ems, which set the size of a given element relative to the parent element in which it's contained. Danger, math ahead.

For example, suppose the parent element of our page is the `<body>`, and we've set the font to 12px.

```css
body {
  font-size: 12px;
}  
```
If I want to make all the h1 tags 24px, we could do this:

```css
h1 {
  font-size: 24px;
}  
```

Or this:

```css
h1 {
  font-size: 200%;
}  
```

Or this:
```css
h1 {
  font-size: 2em;
}  
```

### Other Key Font-Related properties

line-height increases the height of the blank space above a word. In the following example, above the text, you'd have a blank space equal to the height of the text.

```css
h1 {
  font-size: 2em;
  line-height: 4em;
}  
```

font-weight makes text bold.  The possible values are bold, normal or a  fine-grained numerical marker of boldness: 100, 200, 300, 400, 500, 600, 700, 800, 900

```css
h1 {
  font-weight: bold;
}  
```

font-style allows you to italicize text, like so.
```css
h1 {
  font-style: italic;
}  
```

text-transform allows you to make all the letters in a given bit of tax uppercase or lowercase *regardless of what you've actually typed in your html document*.

```css
h1 {
  text-transform: uppercase;
}  
```

text-align allows you to put text in the center of a page, or to the right or left, like so:

```css
h1 {
  text-align:center;
}  
```
