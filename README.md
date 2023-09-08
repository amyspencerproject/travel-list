# Travel List Challenge - Ulitmate React Course

## Overview

This little app is one of the challenges in a Udemy course "Ulitmate React Course" by Jonas. I wanted to save it a as repo just because I was reviewing so many React concepts while building it.

### Built with

- Used Create React App only because for familiarity. Yes I know it is deprecated 😉
- [React](https://reactjs.org/) - JS library

### What I learned

- Used `Array.from` to create an array and then combined with `map()` to populate the `<option> `elements in a form

  ```
  <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

  ```

- In VS Code you can make a new component file easily by selecting the Component you want, right clicking, selecting Refactor and Make a new file. This creates the new file with the necessary imports like useState, etc. Then it also adds the import of the new file to the top of the current file.

### Useful resources

-

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
