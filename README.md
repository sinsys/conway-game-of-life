# Conway's Game of Life

- [Conway's Game of Life](#conways-game-of-life)
  - [Description](#description)
  - [Rules](#rules)
  - [Terminology](#terminology)
  - [Functionality](#functionality)
  - [Live Site](#live-site)
  - [Developer](#developer)
  - [YouTube Video Demonstration](#youtube-video-demononstration)
  - [Contribution](#contribution)
  - [Attributions](#attributions)


## Description
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur.

This is a 100% vanilla representation code challenge using Svelte and TypeScript.

## Rules
- Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
- Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
- Any live cell with two or three live neighbours lives, unchanged, to the next generation.
- Any dead cell with exactly three live neighbours will come to life.

## Terminology
- Landscape - This represents the entire board of cells
- Cell - This represents a singular cell within the Landscape
- Step - A single evolution of the Landscape
- Row - Collection of single cell Columns
- Column - Collection of same-index columns in a Row
- Evolution - Propagation of life and the advancement of Cells

## Functionality
> Cells are able to be toggled or randomized for your initial conditions  
> The game is a 0 player game, and will propagate by itself, based on the initial state  
> You can reset the board and try again at any time by selecting *Randomize*  
> Press Start or Stop to control evolution

## Live Site
[Live Site - Hosted by Netlify](https://astonishing-kangaroo-015a66.netlify.app/)

## Developer
Run the following commands:
```js
# install deps
npm i

# run development server
npm run dev
```

## YouTube Video Demonstration
- To Be Created - Here is a link to the [Tech Debt channel](https://www.youtube.com/channel/UC8dWTP7lkv56_tI5VwXQtEg)

## Contribution

Want to use this? Like the style? Want to work together? Contact below.

## Attributions

Author - [Nicholas Hazel](https://github.com/sinsys)
