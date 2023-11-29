# JavaScript Code README

## Overview

The provided JavaScript code is designed to select and modify the content of two HTML elements, namely a paragraph (`<p>`) and a div (`<div>`). This README will guide you through the code step by step.

## Code Explanation

### Step 1: Selecting the Paragraph Element
```javascript
// A variável p1 recebe o primeiro elemento 'p' do documento.
var p1 = document.getElementsByTagName('p')[1];
```
The variable `p1` is assigned the value of the second paragraph element (`<p>`) in the document. `document.getElementsByTagName('p')[1]` is used to select the element, where the number inside the square brackets represents the position of the element (starting from index 0).

### Step 2: Displaying the Paragraph Content
```javascript
// A função document.write() é usada para exibir o conteúdo interno do parágrafo.
document.write(p1.innerHTML);
```
The `document.write()` function is used to display the inner HTML content of the paragraph. The property `p1.innerHTML` retrieves the HTML content inside the specified paragraph.

### Step 3: Changing Paragraph Text Color
```javascript
// A cor do texto do parágrafo é alterada para vermelho, usando a propriedade CSS style.color.
p1.style.color = 'red';
```
The color of the text within the paragraph is changed to red using the CSS property `style.color`.

### Step 4: Selecting the Div Element
```javascript
// A variável d recebe o elemento div com o ID 'msg'.
var d = document.querySelector('div#msg');
```
The variable `d` is assigned the value of the div element with the ID 'msg'. `document.querySelector('div#msg')` is used to select the first element that matches the specified selector.

### Step 5: Changing Div Text Color
```javascript
// A cor do texto do elemento div é alterada para vermelho, usando a propriedade CSS style.color.
d.style.color = 'red';
```
The color of the text within the div element is changed to red using the CSS property `style.color`.

## Result
As a result of executing this code, the text color of the first paragraph and the div element with the ID 'msg' will be changed to red.