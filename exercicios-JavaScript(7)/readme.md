**readme.md**

# Dynamic Greeting Page

This code features a JavaScript function named `carregar()`. Let's break down what each part does:

## Code Explanation

1. `var msg = window.document.getElementById('msg')`: This line selects an HTML element with the ID 'msg' and stores it in the variable `msg`.

2. `var img = window.document.getElementById('imagem')`: This line selects an HTML element with the ID 'imagem' and stores it in the variable `img`.

3. `var date = new Date()`: This creates a new instance of the `Date` object, representing the current date and time.

4. `var hora = date.getHours()`: This obtains the current hour from the previously created `Date` object and stores it in the variable `hora`.

5. `msg.innerHTML = `Agora são ${hora} horas``: This sets the HTML content of the message to display the current hour.

## Conditional Block

The conditional `if-else` block checks the current hour and, based on it, adjusts the displayed image and the page's background color. Here are the conditions:

- If `hora` is greater than or equal to 0 and less than 12, it displays the message "Bom dia," sets the image to 'manha.jpg,' and the background color to a light blue tone.

- If `hora` is greater than or equal to 12 and less than or equal to 18, it displays the message "Boa tarde," sets the image to 'tarde.jpg,' and the background color to an orange tone.

- If none of the above conditions are met, it displays the message "Boa noite," sets the image to 'noite.jpg,' and the background color to a dark blue tone.

## Summary

In summary, this code dynamically updates the page with a greeting based on the time of day, adjusting the image and background color according to the current hour.