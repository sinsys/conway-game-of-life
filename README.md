# Conway's Game of Life

## Description
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

## Rules
- Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure[1]).
- Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
- Any live cell with two or three live neighbours lives, unchanged, to the next generation.
- Any dead cell with exactly three live neighbours will come to life.

## Terminology
- Landscape - This represents the entire board of cells
- Cell - This represents a singular cell within the Landscape
- Step - A single evolution of the Landscape
- Row - Collection of single cell Columns
- Column - Collection of same-index columns in a Row

## Functionality
> Cells are able to be toggled or randomized for your initial conditions
> The game is a 0 player game, and will propagate by itself, based on the initial state
> You can reset the board and try again at any time <TODO>