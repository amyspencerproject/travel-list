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

### Useful resources

-

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
