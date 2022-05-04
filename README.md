# React Dark Mode Challenge
This repo demonstrate how I solve the dark mode challenge from [react-coding-challenges](https://github.com/alexgurr/react-coding-challenges).

## Running the project
`$ yarn start` to start development mode 

## How I solve the problem
### 1. Create `dark-mode-button` component
For seperation of concerns, the `DarkModeButton` only focuses on its outcome and can be controlled. In this way, the component is reusable.

### 2. `isDarkMode` state
Implement using `React.useState` at root level. The `dark-mode` class-name would be appended to root component accordingly.

### 3. Use context to provide theme information.
Considering the `isDarkMode` flag may be used in other part of the application, here uses context for state sharing. 

## What could be better?
### Implement a design system
Though this is a small project, we as developers are easily forsee the complexity it might be. Implementing a design system, which means symbolizing the styles with sementic meaning, would be easier to maintain the theme in our app.

### Implement styles with CSS variables
From the challenge code base, the styles of dark mode and light mode was separated. But they both have the same architecture, which means whether in dark mode or light mode there should always be a background, so we should think about how to develop one single structure. 
CSS variables would easily achieve the goal. For example:
```scss
  .dark {
    --app-background: #000000
  }

  .light {
    --app-background: #ffffff
  }

  .app {
    background-color: --app-background;
  }
```

I would say implementing a design system and using CSS variables together will provide a solid theme. It would be easier to maintain and it reduces our bundle size.

