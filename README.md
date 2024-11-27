# Gallery

Welcome to **kostassliazas.github.io/gallery**, a showcase of images, projects, or experiments.
## Quick Links

- [Demo](https://kostassliazas.github.io/gallery/#demo)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [License](#license)

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/KostasSliazas/gallery.git
    ```

2. **Add `main.js` file to the `js` folder.**

3. **Add the following script to the `<head>` section in your HTML file:**
    ```html
    <script defer src="js/main.js"></script>
    ```

4. **Customize default background colors in your CSS (optional):**

    If you want to change the default colors for the gallery, add or update these variables in your CSS file:
    ```css
    :root {
      --color1: #eef; /* Gallery image background */
      --color2: #aab; /* Gallery background */
    }
    ``` 
   If both --color1 and --color2 are set to the same value, the text will become invisible
    ```css
   #imag7 {
      --color1: #000;
      --color2: #000;
   }
   ```
## Technologies Used

- **HTML**: Structure of the gallery.
- **CSS**: Custom styles for layout and design.
- **JavaScript**: Interactive elements like image sliders or lightboxes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
