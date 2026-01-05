# Gallery

Welcome to **kostassliazas.github.io/gallery**, a showcase of images, projects, or experiments.
## Quick Links

- [1.Demo](https://kostassliazas.github.io/gallery/#demo)  [2.Demo(full screen)](https://kostassliazas.github.io/gallery/dist/#demo) [3.Demo(Custom extension)](https://kostassliazas.github.io/K7/)
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

4. **Customize default background colors in your CSS (Optional):**

    If you want to change the default colors for the gallery, add or update these variables in your CSS file:
    ```css
    :root {
      --color1: #999; /* Gallery image background */
      --color2: #777; /* Gallery background */
    }
    ``` 
5. **Check and Customize Defaults to Match Your Preferences (Optional):**  
```javascript
// Default settings for the application
export const defaults = {
  delaySeconds: 1033, // Delay time in milliseconds before the next action.
  folder: 'l/', // Folder name or image prefix (prefix should not include '/').
  imageContainer: 'images', // Class name for the image container. If empty, all images are selected.
  showButtons: 1, // Display buttons by default. (true = 1 and false = 0)
  showButtonsOnPlay: 1, // Display buttons when autoplay is active.
  extension: '' // Additional extension for large resolution (empty = same image extension).
};
```

## Technologies Used

- **HTML**: Structure of the gallery.
- **CSS**: Custom styles for layout and design.
- **JavaScript**: Interactive elements like image sliders or lightboxes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
